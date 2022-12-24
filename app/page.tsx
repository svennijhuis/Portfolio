import Cases from "../components/cases/cases";
import FeaturedCases from "../components/cases/featured-case";
import ContactSection from "../components/contact/contact";
import HeroHome from "../components/hero-home/hero-home";
import CallToAction from "../components/text/call-to-action";

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturedCases title="Bekijk mijn nieuwste case die gemaakt is in Next.js en Tailwindcss" subtitle="Gapstars" urlImage="" altImage="" />
      <Cases />
      <CallToAction
        text="I turn beautiful designs into rich experiences."
        button="About"
      />
      <ContactSection
        title="Een wereld met eindeloos veel kansen."
        urlImage=""
        altImage=""
      >
        Contact
      </ContactSection>
    </>
  );
}
