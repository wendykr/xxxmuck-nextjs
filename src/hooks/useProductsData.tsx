import { ProductItemProps } from "@/components/ProductItem/ProductItem";
import { useState, useEffect } from "react";

export default function useProductsData() {
  const [data, setData] = useState<ProductItemProps[] | null>([]);

  const fetchData = async () => {
    const response = await fetch("/products.json");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
