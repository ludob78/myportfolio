"use client";

type Props = {};
import React from "react";
import { useTranslation } from "next-i18next";
import { locales } from "@/lib/data";
import { motion } from "framer-motion";
import clsx from "clsx";
// import { useActiveLocaleContext } from "@/context/active-locale-context";
import Image from "next/image";
import enIcon from "@/lib/flags/en.svg";
import frIcon from "@/lib/flags/fr.svg";

type LanguagesSwitchProps = {};

const LanguagesSwitch = (props: LanguagesSwitchProps) => {
  // const { activeLocale, setActiveLocale, /* setTimeOfLastClick */ } =
    // useActiveLocaleContext();
  console.log("activeLocale", locales);
  return (
    <motion.div
      className="fixed 
      bottom-[1rem] left-[5rem] 
      md:bottom-[inherit] md:left-[inherit] md:top-[2rem] md:right-[0rem] 
      bg-white h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] md:w-30 active:scale-105 transition-all dark:bg-gray-950 
      w-[7rem] p-2"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <nav className="flex h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-1">
          {locales.map((locale, k) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={`locale-${k}`}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Image
                className={clsx(
                  "flex items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 w-[3rem] h-[3rem] md:w-32 md:h-15",
                  {
                    // "text-gray-950 dark:text-gray-200": activeLocale === locale,
                  }
                )}
                src={locale === "en" ? enIcon : frIcon}
                alt="Follow us on Twitter"
                onClick={() => {
                  // setActiveLocale(locale);
                  // setTimeOfLastClick(Date.now());
                }}
              />
             {/*  {locale === activeLocale && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )} */}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default LanguagesSwitch;
