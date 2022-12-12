import Image from "next/image";
import styles from "./cases.module.scss";

export default function CardCases() {
  return (
    <article className="border-black border-b-[1px] last-of-type:border-0 py-5 last-of-type:pb-0 first-of-type:pt-10 md:first-of-type:pt-12 relative test">
      <h3 className="text-30 leading-30 font-normal text-black">sdaf</h3>
      <h3 className="text-40 leading-50 font-medium text-black">asfd</h3>
      <Image
        className={`absolute ${styles.img_hover}`}
        src=""
        alt=""
        width={500}
        height={200}
      />
    </article>
  );
}
