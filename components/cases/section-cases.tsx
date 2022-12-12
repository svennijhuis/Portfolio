import CardCases from "../cards/cases";

export default function SectionCases() {
  return (
    <>
      <div className="col-span-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardCases key={index + 1} />
        ))}
      </div>
    </>
  );
}
