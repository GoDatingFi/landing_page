import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type SheetForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const body = req.body as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    // Create client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '1IA9xvtQWWt2rw8Op9rGHDRfmIghl-M-1ud2AWr-tvuw';

    const metaData = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'A1:D1',
    });

    await googleSheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A1:D1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[body.name, body.email, body.phone, body.message]],
      },
    });

    res.send('Successfully submitted! Thank you!');

    // const auth = new google.auth.GoogleAuth({
    //   credentials: {
    //     client_email: process.env.GOOGLE_CLIENT_EMAIL,
    //     private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    //   },
    //   scopes: [
    //     'https://www.googleapis.com/auth/drive',
    //     'https://www.googleapis.com/auth/drive.file',
    //     'https://www.googleapis.com/auth/spreadsheets',
    //   ],
    // });
    //
    // const sheets = google.sheets({
    //   auth,
    //   version: 'v4',
    // });
    //
    // const response = await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
    //   range: 'A1:D1',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[body.name, body.email, body.phone, body.message]],
    //   },
    // });
    //
    // return res.status(201).json({
    //   data: response.data,
    // });
  } catch (e: any) {
    return res.status(e.code).send({ message: e.message });
  }
}
