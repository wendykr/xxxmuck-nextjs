import { ProductItemStructure } from "@/types/ProductItemStructure";
import { useState, useEffect } from "react";

export default function useProductsData() {
  const [data, setData] = useState<ProductItemStructure[] | null>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://apps.kodim.cz/react-2/xxxmuck/products"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}
