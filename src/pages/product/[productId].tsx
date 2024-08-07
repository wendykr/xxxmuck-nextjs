import { ProductItemStructure } from "@/types/ProductItemStructure";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps<
  ProductDetailProps
> = async (context) => {
  const { productId } = context.params as { productId: string };
  const response = await fetch(
    "https://apps.kodim.cz/react-2/xxxmuck/products"
  );
  const responseData = await response.json();
  const data = responseData.find(
    (product: ProductItemStructure) => product.id === productId
  );

  return {
    props: {
      data,
    },
  };
};

interface ProductDetailProps {
  data: ProductItemStructure;
}

export default function ProductDetail({ data }: ProductDetailProps) {
  if (!data) {
    return (
      <div className="mx-auto my-10 max-w-7xl text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { name, image } = data;

  return (
    <>
      <Head>
        <title>{name} | XXXMuck</title>
      </Head>
      <div className="mx-auto my-32 w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-row gap-10 flex-grow">
        <div className="relative w-[358px] h-[400px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 360px"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="mx-0 my-4 text-4xl font-normal">{name}</h2>
          <button className="btn btn-neutral w-48 text-white text-xl bg-[#414141]">
            Objednat
          </button>
        </div>
      </div>
    </>
  );
}
