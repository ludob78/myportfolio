import { useActiveSectionContext } from "@/context/active-section-context";
import { useActiveLocaleContext } from "@/context/active-locale-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName, LocaleName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useLocaleInView(localeName: LocaleName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveLocale, /* timeOfLastClick */ } = useActiveLocaleContext();

  useEffect(() => {
    if (inView && Date.now()/*  - timeOfLastClick */ > 1000) {
      setActiveLocale(localeName);
    }
  }, [inView, setActiveLocale, /* timeOfLastClick */, localeName]);

  return {
    ref,
  };
}
