import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const gebiedTips: Record<string, string> = {
  energie:
    'Jouw energie is je fundament. Plan elke dag één bewust herstelmoment in, ook al duurt het maar 10 minuten zonder telefoon en zonder to-do lijst. Energie bijvullen is geen luxe, het is onderhoud.',
  zelf:
    'Begin iedere ochtend met één vraag: "Hoe voel ik me nu écht?" Luister niet naar je hoofd, maar naar je lijf. Je hoeft er niets mee te doen, alleen maar merken. Dat is al het begin van verbinding met jezelf.',
  kind:
    'Verbinding met je kind gaat niet over hoeveelheid tijd, maar over aanwezigheid. Eén moment per dag van écht contact: oogcontact, samen lachen, even stilzitten. Dat doet meer dan een volle dag naast elkaar zijn.',
  partner:
    'Relaties zijn spiegels. Wat je in je partner irriteert, vertelt je vaak iets over wat je van jezelf nodig hebt. Begin niet met het gesprek dat je wilt hebben, maar met de vraag: wat heb ik nodig?',
  werk:
    'Wie ben jij als je niet "mama" bent? Je identiteit is groter dan je rol. Geef haar ook ruimte, al is het maar één klein ding per week dat puur voor jou is, buiten het moederschap.',
  sociaal:
    'Hulp vragen is geen zwakte, het is wijsheid. Welk persoon in jouw omgeving zou je deze week iets kunnen vragen, hoe klein ook? Echte verbinding begint bij durven ontvangen.',
  lichaam:
    'Je lijf houdt alles bij wat je hoofd allang vergeten is. De signalen die je voelt zijn er niet voor niets, ze zijn er al langer dan je denkt. Eén keer per dag even inchecken bij je lijf is genoeg om te beginnen.',
  grip:
    'Grip begint niet met méér doen, maar met minder willen controleren. Wat kun je vandaag loslaten zonder dat het écht iets kost? Overzicht komt als je stopt met alles tegelijk vast te houden.',
};

// Eén tag per levensgebied — hierop kun je in Mailblue 8 losse automations
// bouwen die elk hun eigen mail versturen ("als tag X wordt toegevoegd, stuur mail Y").
const gebiedTagLabels: Record<string, string> = {
  energie: 'Levenswiel - laagste: Energie & rust',
  zelf: 'Levenswiel - laagste: Verbinding met jezelf',
  kind: 'Levenswiel - laagste: Verbinding met kind(eren)',
  partner: 'Levenswiel - laagste: Partner & relatie',
  werk: 'Levenswiel - laagste: Werk / identiteit',
  sociaal: 'Levenswiel - laagste: Sociale steun',
  lichaam: 'Levenswiel - laagste: Lichaam & gezondheid',
  grip: 'Levenswiel - laagste: Grip & overzicht',
};

async function mailblueFetch(apiUrl: string, apiKey: string, path: string, init: RequestInit = {}) {
  const res = await fetch(`${apiUrl}/api/3${path}`, {
    ...init,
    headers: {
      'Api-Token': apiKey,
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Mailblue ${path} gaf ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

async function getOrCreateTagId(apiUrl: string, apiKey: string, tagName: string): Promise<number> {
  const search: { tags?: { id: string; tag: string }[] } = await mailblueFetch(
    apiUrl, apiKey, `/tags?search=${encodeURIComponent(tagName)}`
  );
  const existing = search.tags?.find(t => t.tag === tagName);
  if (existing) return Number(existing.id);

  const created: { tag: { id: string } } = await mailblueFetch(apiUrl, apiKey, '/tags', {
    method: 'POST',
    body: JSON.stringify({ tag: { tag: tagName, tagType: 'contact' } }),
  });
  return Number(created.tag.id);
}

async function tagContact(apiUrl: string, apiKey: string, contactId: number, tagId: number) {
  try {
    await mailblueFetch(apiUrl, apiKey, '/contactTags', {
      method: 'POST',
      body: JSON.stringify({ contactTag: { contact: contactId, tag: tagId } }),
    });
  } catch (err) {
    // Contact had deze tag mogelijk al — niet fataal
    console.error('Tag toevoegen mislukt:', err);
  }
}

const gebieden = [
  { key: 'energie', label: 'Energie & rust' },
  { key: 'zelf', label: 'Verbinding met jezelf' },
  { key: 'kind', label: 'Verbinding met je kind(eren)' },
  { key: 'partner', label: 'Partner & relatie' },
  { key: 'werk', label: 'Werk / identiteit' },
  { key: 'sociaal', label: 'Sociale steun' },
  { key: 'lichaam', label: 'Lichaam & gezondheid' },
  { key: 'grip', label: 'Gevoel van grip & overzicht' },
] as const;

function scoreKleur(score: number) {
  if (score <= 4) return '#c16052';
  if (score <= 6) return '#dda494';
  return '#76473a';
}

function buildEmailHtml(
  values: Record<string, number>,
  avg: string,
  lowestLabel: string,
  tip: string,
) {
  const scoreRijen = gebieden
    .map(g => {
      const score = values[g.key] ?? 5;
      const balk = '█'.repeat(score) + '░'.repeat(10 - score);
      return `<tr>
        <td style="padding:6px 12px 6px 0;font-size:14px;color:#76473a;white-space:nowrap;">${g.label}</td>
        <td style="padding:6px 0;font-family:monospace;font-size:13px;color:${scoreKleur(score)};">${balk}</td>
        <td style="padding:6px 0 6px 10px;font-size:14px;font-weight:700;color:${scoreKleur(score)};">${score}/10</td>
      </tr>`;
    })
    .join('');

  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#fae8e1;font-family:Arial,sans-serif;">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.07);">
  <div style="background:#c16052;padding:32px 40px;">
    <p style="margin:0;color:rgba(255,255,255,.8);font-size:13px;letter-spacing:1px;text-transform:uppercase;">Momtrail · Jouw Levenswiel</p>
    <h1 style="margin:8px 0 0;color:#fff;font-size:26px;font-weight:700;line-height:1.3;">Jouw persoonlijk mini-verslag</h1>
  </div>
  <div style="padding:36px 40px;">
    <p style="margin:0 0 20px;color:#76473a;font-size:15px;line-height:1.7;">Hé lieve mama,</p>
    <p style="margin:0 0 20px;color:#76473a;font-size:15px;line-height:1.7;">Je hebt het Levenswiel ingevuld. Dat is al een daad van eerlijkheid tegenover jezelf. Hier zijn jouw scores:</p>
    <div style="background:#fae8e1;border-radius:12px;padding:20px 24px;margin-bottom:28px;">
      <table style="width:100%;border-collapse:collapse;">${scoreRijen}</table>
      <p style="margin:16px 0 0;font-size:14px;color:#76473a;">Gemiddelde score: <strong>${avg} / 10</strong></p>
    </div>
    <div style="border-left:4px solid #c16052;padding:16px 20px;margin-bottom:28px;background:#fff8f6;border-radius:0 12px 12px 0;">
      <p style="margin:0 0 8px;font-size:12px;color:#c16052;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Mijn tip voor ${lowestLabel}</p>
      <p style="margin:0;color:#76473a;font-size:15px;line-height:1.75;font-style:italic;">"${tip}"</p>
      <p style="margin:12px 0 0;font-size:13px;color:#76473a;">Marleen, Momtrail</p>
    </div>
    <p style="margin:0 0 28px;color:#76473a;font-size:15px;line-height:1.7;">Wil je samen kijken wat er <em>écht</em> onder de oppervlakte speelt? Een kennismaking is altijd gratis en vrijblijvend.</p>
    <div style="text-align:center;margin-bottom:28px;">
      <a href="https://momtrail.nl/contact" style="display:inline-block;background:#c16052;color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:999px;text-decoration:none;">Plan een gratis kennismaking →</a>
      <p style="margin:10px 0 0;font-size:12px;color:#76473a99;">30 minuten · vrijblijvend · online of bij Momtrail</p>
    </div>
    <hr style="border:none;border-top:1px solid #dda49440;margin:0 0 20px;"/>
    <p style="margin:0;font-size:12px;color:#76473a80;line-height:1.6;">Je ontvangt deze mail omdat je het gratis Levenswiel op momtrail.nl hebt ingevuld. Je staat niet automatisch op een nieuwsbrief.</p>
  </div>
</div>
</body></html>`;
}

export async function POST(req: NextRequest) {
  const { email, values, avg, lowestKey, lowestLabel } = await req.json() as {
    email: string;
    values: Record<string, number>;
    avg: string;
    lowestKey: string;
    lowestLabel: string;
  };

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Ongeldig e-mailadres' }, { status: 400 });
  }

  const tip = gebiedTips[lowestKey] ?? '';

  // Stuur direct gepersonaliseerde mail via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: 'Marleen · Momtrail <info@momtrail.nl>',
      to: email,
      subject: 'Jouw Levenswiel: persoonlijk mini-verslag',
      html: buildEmailHtml(values, avg, lowestLabel, tip),
    });
    // Stuur lead-notificatie naar jezelf (met alle scores)
    const scoreRegels = gebieden
      .map(g => `<tr><td style="padding:4px 16px 4px 0;color:#76473a;font-size:14px;">${g.label}</td><td style="padding:4px 0;font-weight:700;color:${scoreKleur(values[g.key] ?? 5)};font-size:14px;">${values[g.key] ?? 5}/10</td></tr>`)
      .join('');
    await resend.emails.send({
      from: 'Momtrail <info@momtrail.nl>',
      to: 'info@momtrail.nl',
      subject: `Nieuwe Levenswiel-lead: ${email}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:480px;">
        <h2 style="color:#c16052;">Nieuwe Levenswiel-inzending</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Gemiddelde:</strong> ${avg}/10</p>
        <p><strong>Laagste gebied:</strong> ${lowestLabel}</p>
        <table style="border-collapse:collapse;margin-top:12px;">${scoreRegels}</table>
      </div>`,
    });
  } catch (err) {
    console.error('Resend fout:', err);
    return NextResponse.json({ error: 'Mail versturen mislukt' }, { status: 500 });
  }

  // Optioneel: sla lead ook op in Mailblue (als env-vars aanwezig zijn)
  const mbKey = process.env.MAILBLUE_API_KEY;
  const mbUrl = process.env.MAILBLUE_API_URL;
  const mbList = process.env.MAILBLUE_LIST_ID;
  if (mbKey && mbUrl) {
    try {
      const syncRes: { contact?: { id: string } } = await mailblueFetch(mbUrl, mbKey, '/contact/sync', {
        method: 'POST',
        body: JSON.stringify({ contact: { email } }),
      });
      const contactId = Number(syncRes.contact?.id);
      if (contactId) {
        const generalTagId = await getOrCreateTagId(mbUrl, mbKey, 'Levenswiel');
        const areaTagName = gebiedTagLabels[lowestKey] ?? `Levenswiel - laagste: ${lowestLabel}`;
        const areaTagId = await getOrCreateTagId(mbUrl, mbKey, areaTagName);
        await Promise.all([
          tagContact(mbUrl, mbKey, contactId, generalTagId),
          tagContact(mbUrl, mbKey, contactId, areaTagId),
        ]);
        if (mbList) {
          await mailblueFetch(mbUrl, mbKey, '/contactLists', {
            method: 'POST',
            body: JSON.stringify({ contactList: { list: Number(mbList), contact: contactId, status: 1 } }),
          }).catch(err => console.error('Mailblue lijst mislukt:', err));
        }
      }
    } catch (err) {
      console.error('Mailblue fout (niet fataal):', err);
    }
  }

  return NextResponse.json({ ok: true });
}
