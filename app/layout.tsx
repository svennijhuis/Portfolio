import "../styles/globals.scss";
import { Quicksand } from "@next/font/google";
const inter = Quicksand({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <footer className="bg-black py-3">
          <section className="container grid grid-cols-2">
            <article></article>
            <article className="flex justify-center md:justify-end flex-row col-span-2 md:col-span-2">
              <p className="text-white text-15 font-normal opacity-80 text-center">
                © Sven Nijhuis - 2022 | Web Developer
              </p>
            </article>
          </section>
        </footer>
      </body>
    </html>
  );
}
