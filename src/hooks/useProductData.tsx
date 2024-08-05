import { ProductItemProps } from "@/components/ProductItem/ProductItem";
import { useState, useEffect } from "react";

export default function useProductData(
  productId: string | string[] | undefined
) {
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
}
