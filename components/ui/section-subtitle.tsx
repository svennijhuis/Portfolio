export default function SectionSubtitle({ title }: { title: string }) {
  return (
    <div className="md:py-12 bg-white md:sticky md:col-span-1 md:h-[100vh] md:top-0">
      <h2 className="text-60 leading-60 font-medium">{title}</h2>
    </div>
  );
}
