import SideNav from "@/components/sidenav";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ActiveLocaleContextProvider from "@/context/active-locale-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
// import { appWithTranslation } from "next-i18next";
import LanguagesSwitch from "../components/languages-switch";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata = {
  title: "Ludovic Barjonnet | Personnal Portfolio",
  description: "Ludovic is a full-stack developer with 5 years of experience.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-28 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <div id="Sun" className="hidden md:block circle h-[10.25rem] w-[10rem] absolute md:top-[98rem] md:left-[74rem] bg-gradient-to-r from-[#ffd700] to-[#ffc700] text-white"
        >
        </div>
        <div id="Mercury"className="hidden md:block circle h-[8rem] w-[8rem] absolute md:top-[59rem] md:left-[33rem] bg-gradient-to-r from-[#ffc996] to-[#ff6324] text-white">
        </div>

        <div id="Venus" className="hidden md:block circle h-[12rem] w-[12rem] absolute md:top-[84rem] md:right-[31rem] bg-gradient-to-r from-[#fff8dc] to-[#ffb74d] text-gray-800">
        </div>

        <div id="Earth" className="hidden md:block circle h-[6rem] w-[6rem] absolute md:bottom-[8rem] md:left-[33rem] bg-gradient-to-r from-[#80c1ff] to-[#4da0ff] text-white">
        </div>

        <div id="Mars" className="hidden md:block circle h-[14rem] w-[14rem] absolute md:top-[36rem] md:right-[30rem] bg-gradient-to-r from-[#ff69b4] to-[#dd3872] text-white">
        </div>

        <div id="Jupiter" className="hidden md:block circle h-[5rem] w-[5rem] absolute md:bottom-[146rem] md:left-[34rem] bg-gradient-to-r from-[#e2f0fe] to-[#c71168] text-gray-800">
        </div>

        <div id="Saturn" className="hidden md:block circle h-[9rem] w-[9rem] absolute md:top-[127rem] md:left-[33rem] bg-gradient-to-r from-[#fff9c4] to-[#90a47e] text-white">
        </div>

        <div id="Uranus" className="hidden md:block circle h-[7rem] w-[7rem] absolute md:bottom-[41rem] md:right-[33rem] bg-gradient-to-r from-[#ccd3d9] to[#455d7a] text-white">
        </div>

        <div id="Neptune" className="hidden md:block circle h-[11rem] w-[11rem] absolute md:top-[5rem] md:left-[32rem] bg-gradient-to-r from-[#a7ffeb] to[#274082] text-gray-800">
        </div>

        <div id="Pluto" className="hidden md:block circle h-[4rem] w-[4rem] absolute md:bottom-[160rem] md:right-[34rem] bg-gradient-to-r from-[#f7f8f9] to-[#8c99b7] text-white">
        </div>
        <ThemeContextProvider>
          <ActiveLocaleContextProvider>
          <ActiveSectionContextProvider>
            <div className="flex flex-column spp">
              <SideNav />
              {children}
            </div>
            <Footer />
            <Toaster position="top-right" />
            <LanguagesSwitch />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
          </ActiveLocaleContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
// export default appWithTranslation(RootLayout);
