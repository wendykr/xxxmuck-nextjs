import ProductItem from "@/components/ProductItem/ProductItem";
import { Inter } from "next/font/google";
import products from "../../public/products.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`p-10 text-center ${inter.className}`}>
      <h1 className="mx-0 my-10 text-[30px] font-normal">Aktuální nabídka</h1>
      <div className="mb-[80px] text-[18px] text-[#6d6d6d]">
        <p>Nejnovější prémiové produkty od předních českých designérů.</p>
        <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
      </div>
      <div>
        <div className="mx-auto my-0 max-w-7xl grid grid-cols-3 justify-items-center">
          {products.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnail_url={item.thumbnail_url}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
