import type { Metadata } from "next";
import "@/styles/globals.css";
import { Locale, i18n } from "../../../i18n.config";

export const metadata: Metadata = {
  title: "Portfolio | Bartłomiej Ostojski",
  description: "Portfolio of Bartłomiej Ostojski, a junior frontend developer.",
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="stylesheet"href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
