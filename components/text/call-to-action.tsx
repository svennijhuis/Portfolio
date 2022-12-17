import { Button } from "@ui/button";

export default function CallToAction({
  text,
  button,
}: {
  text: string;
  button: string;
}) {
  return (
    <section className="py-10 md:py-12 bg-black">
      <div className="container flex flex-col gap-3">
        <h3 className="text-40 leading-50 md:text-60 md:leading-70 font-normal text-white md:w-[60%]">
          {text}
        </h3>
        <Button intent="primary">{button}</Button>
      </div>
    </section>
  );
}
