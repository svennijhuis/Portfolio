import SectionSubtitle from "@ui/section-subtitle";
import SectionCases from "./section-cases";

export default function Cases() {
  return (
    <>
      <section className="bg-white">
        <div className="container grid grid-cols-2 py-10 md:py-0">
          <SectionSubtitle title="Projects">
          </SectionSubtitle>
          <SectionCases />
        </div>
      </section>
    </>
  );
}
