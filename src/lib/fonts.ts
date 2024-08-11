import { Libre_Baskerville } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Platypi } from "next/font/google";
import { Zilla_Slab } from "next/font/google";

export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const platypi = Platypi({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
