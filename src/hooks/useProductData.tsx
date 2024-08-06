import { ProductItemStructure } from "@/types/ProductItemStructure";
import { useState, useEffect } from "react";

export default function useProductData(productId: string | undefined) {
  const [data, setData] = useState<ProductItemStructure | null>(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://apps.kodim.cz/react-2/xxxmuck/products"
    );
    const responseData = await response.json();
    const product = responseData.find(
      (product: ProductItemStructure) => product.id === productId
    );
    setData(product || null);
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return data;
}
