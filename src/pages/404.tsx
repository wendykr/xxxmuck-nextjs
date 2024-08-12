import Head from "next/head";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 | XXXMuck</title>
      </Head>
      <div className="h-screen dark:bg-black flex">
        <div className="mx-auto px-[20px] w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col flex-grow items-center justify-center">
          <h2 className="mt-0 mb-8 text-2xl dark:text-[#ebebeb]">Jejda ...</h2>
          <p className="text-center text-[#6d6d6d] text-[18px]">
            Tuhle stránku ještě nemám nebo jde o chybný odkaz.
          </p>
          <p className="text-center text-[#6d6d6d] text-[18px]">
            <Link
              href="/"
              className="underline hover:no-underline text-black dark:text-[#ebebeb]"
            >
              Zpět
            </Link>{" "}
            na hlavní stranu.
          </p>
        </div>
      </div>
    </>
  );
}
