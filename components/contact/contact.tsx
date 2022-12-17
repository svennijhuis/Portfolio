import Image from "next/image";
import SectionSubtitle from "@ui/section-subtitle";
export default function ContactSection({
  title,
  buttonName,
  urlImage,
  altImage,
}: {
  title: string;
  buttonName: string;
  urlImage: string;
  altImage: string;
}) {
  return (
    <section className="h-screen bg-white">
      <div className="container grid grid-cols-2 gap-3">
        <SectionSubtitle title={title} />
        <div className="col-span-1 relative h-screen w-[50vw]">
          <div className="sticky bottom-0 bg-black p-2 z-1">
            <button>{buttonName}</button>
          </div>
          <Image
            className="absolute w-full h-full object-cover"
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
