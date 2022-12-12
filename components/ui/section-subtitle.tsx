export default function SectionSubtitle({ title }: { title: string }) {
  return (
    <div className="py-10 md:py-12 bg-white sticky col-span-1 h-[100vh] top-0">
      <h2 className="text-60 leading-60 font-medium">{title}</h2>
    </div>
  );
}
