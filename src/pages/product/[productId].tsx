import useProductData from "@/hooks/useProductData";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;

  const product = useProductData(String(productId));

  if (!product) {
    return (
      <div className="mx-auto my-10 max-w-7xl text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { name, image } = product;

  return (
    <div className="mx-auto my-32 max-w-7xl flex flex-row gap-10">
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
  );
}
