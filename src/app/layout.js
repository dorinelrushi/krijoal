import Script from "next/script";
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
      <body cz-shortcut-listen="true">{children}

        <Script src="https://pl30147624.effectivecpmnetwork.com/6c/7a/ae/6c7aaeab5079acf8577221eb5b132d88.js" strategy="lazyOnload" />
        <Script async="async" data-cfasync="false" src="https://pl30147623.effectivecpmnetwork.com/063736e806677d4826e8dcce849396d9/invoke.js" />
        <div id="container-063736e806677d4826e8dcce849396d9"></div>


      </body>
    </html>
  );
}
