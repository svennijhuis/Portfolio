import { Button } from "@ui/button";
import styles from "./hero-home.module.scss";

export default function TextHero() {
  return (
    <article className="sticky top-0 h-[100vh] flex flex-col justify-center col-span-2 md:col-span-1">
      <h1 className={`text-60 leading-70 font-medium text-white ${styles.h1}`}>
        Hi. i’m <span>Sven</span> Webdeveloper.
      </h1>
      <h2 className="mb-3 text-20 leading-30 text-white">
        Front End Developer / WordPress Expert
      </h2>
      <div className="flex flex-row flex-wrap gap-3">
        <Button intent="primary">Dit is een test</Button>
        <Button intent="secondary">Dit is een test</Button>
      </div>
    </article>
  );
}
