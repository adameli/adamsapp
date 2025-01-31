import Image from "next/image";
import booksPic from "../../public/books.jpg";
import InfiniteQuery from "./infinite/page";
import { metaDataObject } from "@/lib/utils";
import { getPageMeta } from "./actions/metaPageAction";

export async function generateMetadata() {

  // fetch data - the about page
  const { page } = await getPageMeta('home')

  return metaDataObject(page)
}

export default function Home() {
  return (
    <main>

      <section className="relative w-full">
        <h1 className="font-mono backdrop-blur-sm font-bold text-center text-3xl md:text-5xl lg:text-6xl tracking-wide absolute inset-0 flex items-center justify-center text-black ">DIVE IN TO THE WORLD OF READING</h1>
        <Image
          className="object-cover max-h-screen w-full"
          src={booksPic}
          alt="Picture of the books"
        />
      </section>
      <InfiniteQuery />

    </main>
  );
}
