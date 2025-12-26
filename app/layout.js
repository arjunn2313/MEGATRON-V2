
import ChristmasSnow from "@/components/elements/Snowfall"
import "/public/assets/css/magnific-popup.min.css"
import "/public/assets/css/style.css"


import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import SantaWaving from "@/components/elements/SantaWaving"
import WhatsAppFloat from "@/components/elements/Whatsapp"
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-main-family",
    display: 'swap',
})
const dm = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--font-btn-family",
    display: 'swap',
})
// const pacifico = Pacifico({
//     weight: ['400'],
//     subsets: ['latin'],
//     // variable: "--nunito-font-family",
//     display: 'swap',
// })















0
 export const metadata = {
  title: "Megatron Car – Best Used Car Dealer in Dubai | Premium Pre-Owned Cars",
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
    "used car company"
  ],
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`body counter-scroll ${dm.variable} ${jakarta.variable}`}>
                <WhatsAppFloat/>
                <SantaWaving/>
                  <ChristmasSnow/>
                {children}</body>
        </html>
    )
}
