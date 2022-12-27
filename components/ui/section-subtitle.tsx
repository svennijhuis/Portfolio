export default function SectionSubtitle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:py-12 bg-white col-span-3 md:sticky md:col-span-1 md:h-[100vh] md:top-0">
      <h2 className="text-60 leading-60 font-medium">{title}</h2>
      {children}
    </div>
  );
}
