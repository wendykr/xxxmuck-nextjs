import { ProductItemStructure } from "@/types/ProductItemStructure";
import Image from "next/image";
import Link from "next/link";

export interface ProductItemProps extends ProductItemStructure {}

export default function ProductItem({ id, name, image }: ProductItemProps) {
  return (
    <Link
      href={`product/${id}`}
      className="transform transition duration-500 hover:opacity-90 hover:scale-[1.02]"
    >
      <div className="relative w-[290px] h-[324px] dark:bg-[#110f0e]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          loading="lazy"
          priority={Number(id) < 3}
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 290px"
        />
      </div>
      <h2 className="my-[30px] mx-0 text-2xl font-normal dark:text-[#ebebeb]">
        {name}
      </h2>
    </Link>
  );
}
