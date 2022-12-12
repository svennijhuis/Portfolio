export default function TextParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-25 leading-35 font-normal text-white">{children}</p>
  );
}
