import Cases from "../components/cases/cases";
import HeroHome from "../components/hero-home/hero-home";
import CallToAction from "../components/text/call-to-action";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Cases />
      <CallToAction text="I turn beautiful designs into rich experiences." button="About" />
    </>
  );
}
