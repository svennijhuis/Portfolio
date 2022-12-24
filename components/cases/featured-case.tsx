import Link from "next/link";
import Image from "next/image";
export default function FeaturedCases({
  title,
  subtitle,
  urlImage,
  altImage,
}: {
  title: string;
  subtitle: string;
  urlImage: string;
  altImage: string;
}) {
  return (
    <>
      <section className="bg-black h-screen w-full relative">
        <Image
          className="absolute w-full h-full object-cover right-0 top-0 z-[1]"
          src={urlImage}
          alt={altImage}
          width={1500}
          height={1500}
        />
        <div className="overlay-img z-[2] absolute w-full h-full"></div>
        <div className="container h-full py-12 md:py-0 relative flex  flex-col justify-center z-[3]">
          <p className="text-white text-18 leading-28 md:text-30 md:leading-30 font-normal">
            {subtitle}
          </p>
          <h2 className="text-white text-25 leading-35 md:text-40 md:leading-50 font-medium  md:w-[70%]">
            {title}
          </h2>
          Link
          <div className="absolute bottom-0 right-0">
            <a href="">See all cases</a>
          </div>
        </div>
      </section>
    </>
  );
}
