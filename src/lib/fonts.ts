import { Platypi } from "next/font/google";
import { Zilla_Slab } from "next/font/google";
import { Dancing_Script } from "next/font/google";

/**For the name in the Hero section */
export const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

/**For the Headings */
export const platypi = Platypi({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-platypi",
});
/**For the Content */
export const zillaSlab = Zilla_Slab({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-zillaSlab",
});

/**Fonts I tested out before settling  */
// export const libreBaskerville = Libre_Baskerville({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });
// export const cormorantGaramond = Cormorant_Garamond({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });
// export const montserrat = Montserrat({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-monteserrat",
// });
