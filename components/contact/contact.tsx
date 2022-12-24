import Image from "next/image";
import SectionSubtitle from "@ui/section-subtitle";
export default function ContactSection({
  title,
  urlImage,
  altImage,
  children,
}: {
  title: string;
  urlImage: string;
  altImage: string;
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen bg-white">
      <div className="container grid grid-cols-2 gap-3">
        <SectionSubtitle title={title}>{children}</SectionSubtitle>
        <div className="col-span-1 overflow-visible relative">
          <Image
            className="absolute w-[50vw] h-full object-cover right-0 top-0"
            src={urlImage}
            alt={altImage}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
