import ProductItem from "@/components/ProductItem/ProductItem";
import { ProductItemStructure } from "@/types/ProductItemStructure";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(
      "https://apps.kodim.cz/react-2/xxxmuck/products"
    );
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return { props: { error: "Error fetching data" } };
  }
};

interface HomeProps {
  data: ProductItemStructure[];
  error?: string;
}

export default function Home({ data, error }: HomeProps) {
  if (error) {
    return (
      <main className={`p-10 text-center flex-grow ${inter.className}`}>
        <div className="mx-auto my-10 max-w-7xl text-center">
          <h2 className="text-2xl">{error}</h2>
        </div>
      </main>
    );
  }

  if (!data) {
    return (
      <>
        <Head>
          <title>XXXMuck: Next.js + React + TypeScript</title>
        </Head>
        <main className={`p-10 text-center flex-grow ${inter.className}`}>
          <div className="mx-auto my-10 max-w-7xl text-center">
            <h1>Loading...</h1>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>XXXMuck: Next.js + React + TypeScript</title>
      </Head>
      <main className={`p-10 text-center flex-grow ${inter.className}`}>
        <h2 className="mx-0 my-10 text-[30px] font-normal">Aktuální nabídka</h2>
        <div className="mb-[80px] text-[18px] text-[#6d6d6d]">
          <p>Nejnovější prémiové produkty od předních českých designérů.</p>
          <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
        </div>
        <div>
          <div className="mx-auto my-0 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {data.map((item: ProductItemStructure) => {
              return (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
