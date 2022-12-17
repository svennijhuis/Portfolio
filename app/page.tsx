import Cases from "../components/cases/cases";
import ContactSection from "../components/contact/contact";
import HeroHome from "../components/hero-home/hero-home";
import CallToAction from "../components/text/call-to-action";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Cases />
      <CallToAction
        text="I turn beautiful designs into rich experiences."
        button="About"
      />
      <ContactSection
        title="Contact"
        buttonName="Neem contact op"
        urlImage=""
        altImage=""
      />
    </>
  );
}
