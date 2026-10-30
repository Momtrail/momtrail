import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(req: NextRequest) {
  const { naam, email } = await req.json() as { naam: string; email: string };

  if (!email) {
    return NextResponse.json({ error: 'E-mailadres ontbreekt' }, { status: 400 });
  }

  const apiUrl = process.env.MAILBLUE_API_URL;
  const apiKey = process.env.MAILBLUE_API_KEY;
  const listId = process.env.MAILBLUE_LIST_ID;

  if (!apiUrl || !apiKey || !listId) {
    return NextResponse.json({ error: 'Mailblue niet geconfigureerd' }, { status: 500 });
  }

  const sync: { contact?: { id: string } } = await mailblueFetch(apiUrl, apiKey, '/contact/sync', {
    method: 'POST',
    body: JSON.stringify({ contact: { email, firstName: naam ?? '' } }),
  });

  const contactId = sync.contact?.id;
  if (!contactId) {
    return NextResponse.json({ error: 'Contact aanmaken mislukt' }, { status: 500 });
  }

  await mailblueFetch(apiUrl, apiKey, '/contactLists', {
    method: 'POST',
    body: JSON.stringify({ contactList: { list: listId, contact: contactId, status: 1 } }),
  });

  return NextResponse.json({ ok: true });
}
