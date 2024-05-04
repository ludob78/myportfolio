import SideNav from "@/components/sidenav";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ActiveLocaleContextProvider from "@/context/active-locale-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { appWithTranslation } from "next-i18next";

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
        <div
          id="circle1"
          className="circle h-[10.25rem] w-[10rem] absolute top-[98rem] left-[74rem] bg-gradient-to-r from-[#ffd700] to-[#ffc700] text-white"
        >
          Sun
        </div>

        <div className="circle h-[8rem] w-[8rem] absolute top-[59rem] left-[33rem] bg-gradient-to-r from-[#ffc996] to-[#ff6324] text-white">
          Mercury
        </div>

        <div className="circle h-[12rem] w-[12rem] absolute top-[84rem] right-[31rem] bg-gradient-to-r from-[#fff8dc] to-[#ffb74d] text-gray-800">
          Venus
        </div>

        <div className="circle h-[6rem] w-[6rem] absolute bottom-[8rem] left-[33rem] bg-gradient-to-r from-[#80c1ff] to-[#4da0ff] text-white">
          Earth
        </div>

        <div className="circle h-[14rem] w-[14rem] absolute top-[36rem] right-[30rem] bg-gradient-to-r from-[#ff69b4] to-[#dd3872] text-white">
          Mars
        </div>

        <div className="circle h-[5rem] w-[5rem] absolute bottom-[146rem] left-[34rem] bg-gradient-to-r from-[#e2f0fe] to-[#c71168] text-gray-800">
          Jupiter
        </div>

        <div className="circle h-[9rem] w-[9rem] absolute top-[127rem] left-[33rem] bg-gradient-to-r from-[#fff9c4] to-[#90a47e] text-white">
          Saturn
        </div>

        <div className="circle h-[7rem] w-[7rem] absolute bottom-[41rem] right-[33rem] bg-gradient-to-r from-[#ccd3d9] to[#455d7a] text-white">
          Uranus
        </div>

        <div className="circle h-[11rem] w-[11rem] absolute top-[5rem] left-[32rem] bg-gradient-to-r from-[#a7ffeb] to[#274082] text-gray-800">
          Neptune
        </div>

        <div className="circle h-[4rem] w-[4rem] absolute bottom-[160rem] right-[34rem] bg-gradient-to-r from-[#f7f8f9] to-[#8c99b7] text-white">
          Pluto
        </div>
        <ThemeContextProvider>
          {/* <ActiveLocaleContextProvider> */}
          <ActiveSectionContextProvider>
            <div className="flex flex-column spp">
              <SideNav />
              {children}
              <SideNav />
            </div>
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
          {/* </ActiveLocaleContextProvider> */}
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
// export default appWithTranslation(RootLayout);
