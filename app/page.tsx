import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
// import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Methodology from "@/components/methodology";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, [
//         'common',
//         'footer',
//       ])),
//       // Will be passed to the page component as props
//     },
//   }
// }

export default function Home() {
  return (
    <main className=" m-auto flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Methodology />
      {/* <Projects /> */}
      <Experience />
      <Contact />
    </main>
  );
}
