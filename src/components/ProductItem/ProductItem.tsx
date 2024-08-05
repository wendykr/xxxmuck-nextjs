import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  id: number;
  title: string;
  thumbnail_url: string;
}

export default function ProductItem({
  id,
  title,
  thumbnail_url,
}: ProductItemProps) {
  return (
    <Link href={`/${id}`}>
      <div className="relative w-[290px] h-[324px]">
        <Image
          src={thumbnail_url}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 290px"
        />
      </div>
      <h2 className="my-[30px] mx-0 text-2xl font-normal">{title}</h2>
    </Link>
  );
}
