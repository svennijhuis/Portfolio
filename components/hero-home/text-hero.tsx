import { Button } from "@ui/button";
import styles from "./hero-home.module.scss";

export default function TextHero() {
  return (
    <article className="md:sticky md:top-0 md:h-[100vh] flex flex-col justify-center md:col-span-1  h-auto">
      <h1 className={`text-40 leading-45 md:text-60 md:leading-70 font-medium text-white ${styles.h1}`}>
        Hi. i’m <span>Sven</span> Webdeveloper.
      </h1>
      <h2 className="mb-3 text-16 leading-26 md:text-20 md:leading-30 text-white">
        Front End Developer / WordPress Expert
      </h2>
      <div className="flex flex-row flex-wrap gap-1 md:gap-3">
        <Button intent="primary">Dit is een test</Button>
        <Button intent="secondary">Dit is een test</Button>
      </div>
    </article>
  );
}
