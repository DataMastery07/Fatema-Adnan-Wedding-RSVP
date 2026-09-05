# Fatema & Adnan — Luxury Wedding RSVP

Next.js 14 App Router wedding RSVP site with the supplied F&A monogram, luxury emerald/gold/ivory styling, animated hero, countdown, venue section, RSVP form and Google Apps Script → Google Sheet integration.

## Fast setup

1. Upload this project to GitHub.
2. Import the repo into Vercel.
3. Create a Google Sheet and open **Extensions → Apps Script**.
4. Paste `google-apps-script/Code.gs`, deploy it as a Web App (Execute as **Me**, access **Anyone**) and copy the `/exec` URL.
5. In Vercel → Project → Settings → Environment Variables, add `GOOGLE_APPS_SCRIPT_URL` with that URL and redeploy.

The RSVP form posts to `/api/rsvp`; the server forwards the response to Apps Script, which appends it to the `RSVP` sheet.

## Wedding data

Bride: Fatema — Daughter of Mr. Fakhruddin & Mrs. Insiyah Depalpurwala
Groom: Adnan — Son of Late Mr. Fakhruddin & Mrs. Ummesalma Saifee
Date: 13 November 2026 (Thursday)
Hijri: 4 Jamada Al Ukhra
Time: 8:00 PM
Venue: Masakin-e-Safiyah Jamatkhana
Nikah: The Nikah has been solemnized in the hands of Shehzada Idris Bhai Saheb D.M.
Families: Depalpurwala & Saifee Families

The supplied F&A logo is stored at `public/fatema-adnan-logo.png` and is used in the hero and as the site's visual monogram.
