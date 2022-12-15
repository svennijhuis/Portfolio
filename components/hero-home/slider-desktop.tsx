import CardHero from "./card-hero";
export default function SliderDesktop() {
  return (
    <article className="col-span-2 md:col-span-1 relative">
      {Array.from({ length: 10 }).map((_, index) => (
        <CardHero key={index + 1} />
      ))}
    </article>
  );
}
