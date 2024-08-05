import { ProductItemProps } from "@/components/ProductItem/ProductItem";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useProductData = (productId: string | string[] | undefined) => {
  const [data, setData] = useState<ProductItemProps | null>(null);

  const fetchData = async () => {
    const response = await fetch("/products.json");
    const responseData = await response.json();
    const product = responseData.find(
      (product: ProductItemProps) => product.id === Number(productId)
    );
    setData(product || null);
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return data;
};

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const product = useProductData(productId);

  if (!product) {
    return (
      <div className="mx-auto my-10 max-w-7xl text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { title, thumbnail_url } = product;

  return (
    <div className="mx-auto my-32 max-w-7xl flex flex-row gap-10">
      <div className="relative w-[358px] h-[400px]">
        <Image
          src={thumbnail_url}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 360px"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="mx-0 my-4 text-4xl font-normal">{title}</h2>
        <button className="btn btn-neutral w-48 text-white text-xl bg-[#414141]">
          Objednat
        </button>
      </div>
    </div>
  );
}
