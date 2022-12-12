import SectionSubtitle from "@ui/section-subtitle";
import SectionCases from "./section-cases";

export default function Cases() {
  return (
    <>
      <section className="bg-white">
        <div className="container grid grid-cols-2">
          <SectionSubtitle title="Projects" />
          <SectionCases />
        </div>
      </section>
    </>
  );
}
