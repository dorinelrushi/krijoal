import "./globals.css";

export const metadata = {
  title: "KrijoAL — Vish Imagjinatën Tënde | T-Shirt, Hoodie & Uniforma Pune",
  description:
    "Prodhues shqiptar i T-shirt, hoodie, sweatshirt dhe uniforma pune me printim të personalizuar. Made in Albania. Porosit tani: 069 602 3373",
  keywords: [
    "tshirt albania",
    "hoodie shqiperi",
    "uniforma pune",
    "printim personalizuar",
    "krijoal",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
