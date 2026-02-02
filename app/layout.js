import ChristmasSnow from "@/components/elements/Snowfall";
import "/public/assets/css/magnific-popup.min.css";
import "/public/assets/css/style.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import SantaWaving from "@/components/elements/SantaWaving";
import WhatsAppFloat from "@/components/elements/Whatsapp";
const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-main-family",
  display: "swap",
});
const dm = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-btn-family",
  display: "swap",
});
// const pacifico = Pacifico({
//     weight: ['400'],
//     subsets: ['latin'],
//     // variable: "--nunito-font-family",
//     display: 'swap',
// })

export const metadata = {
  title: "Best Used Car Dealer in Dubai | Premium Pre-Owned Cars",
  description:
    "Megatron Car is a trusted used car dealer offering pre-owned luxury vehicles, premium used cars, and verified used cars for sale in Dubai and UAE. Buy used cars with confidence at the best used car prices.",
  keywords: [
    "pre owned luxury vehicles",
    "used cars",
    "used car dealers",
    "used car dealer",
    "used vehicles",
    "used cars in dubai",
    "pre owned cars",
    "used cars for sale",
    "pre owned cars dubai",
    "preowned cars for sale",
    "buy used cars",
    "car for sale",
    "pre owned vehicles",
    "dubai cars",
    "used cars for sale dubai",
    "auto dealer",
    "second hand car",
    "used car price in dubai",
    "car sale dubai",
    "used car price in uae",
    "premium used cars",
    "used car company",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* TikTok Pixel */}
      <Script id="tiktok-pixel" strategy="afterInteractive">
        {`
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
  ttq.setAndDefer=function(t,e){
    t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}
  };
  for(var i=0;i<ttq.methods.length;i++) ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.load=function(e){
    var n=document.createElement("script");
    n.async=true;
    n.src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid="+e+"&lib=ttq";
    document.head.appendChild(n);
  };
  ttq.load('D5BOA63C77U9GN88CKMG');
  ttq.page();
}(window, document, 'ttq');
        `}
      </Script>

      <meta
        name="google-site-verification"
        content="AahdyWclyu6WA9OgOzl20rLRIlULacCEl27vruRgPSQ"
      />

      <head />

      <body
        className={`body counter-scroll ${dm.variable} ${jakarta.variable}`}
      >
         <Toaster position="top-right" />
        <WhatsAppFloat />
        {/* <SantaWaving /> */}
        {/* <ChristmasSnow /> */}
        {children}
      </body>
    </html>
  );
}
