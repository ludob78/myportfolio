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
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div> */}
        {/* <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

        <ThemeContextProvider>
          <ActiveLocaleContextProvider>
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
          </ActiveLocaleContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
// export default appWithTranslation(RootLayout);
