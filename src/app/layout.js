import { Inter, Poppins, Oswald, Quicksand } from "next/font/google";
import localFont from "next/font/local";
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'react-notion-x/src/styles.css'
import "./globals.css";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter', });
const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald', weight: '400' });
const quick = Quicksand({ subsets: ["latin"], variable: '--font-quick', weight: '700' });
const quickLight = Quicksand({ subsets: ["latin"], variable: '--font-quickLight', weight: '400' });
const poppins = Poppins({ subsets: ["latin"], variable: '--font-poppins', weight: '500' });
const bella = localFont({
  src: '../../public/fonts/bella.ttf',
  display: 'swap',
  variable: '--font-bella',
})
const corir = localFont({
  src: '../../public/fonts/corir.ttf',
  display: 'swap',
  variable: '--font-corir',
})
const suiss = localFont({
  src: '../../public/fonts/Suissnord.otf',
  display: 'swap',
  variable: '--font-suiss',
})

export const metadata = {
  title: "Suryansh S.",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
      <body className={`${quickLight.variable} ${quick.variable} ${inter.variable} ${suiss.variable} ${poppins.variable} ${bella.variable} ${corir.variable} ${oswald.variable}`}>
        <Loader>
          {children}
        </Loader>
      </body>
    </html>
  );
}
