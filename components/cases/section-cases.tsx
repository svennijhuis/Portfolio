import CardCases from "../cards/cases";

export default function SectionCases() {
  return (
    <>
      <div className="col-span-3 md:col-span-2 md:my-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <CardCases key={index + 1} />
        ))}
      </div>
    </>
  );
}
