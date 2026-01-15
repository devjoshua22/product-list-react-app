import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:8000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const UseHandleData = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return {
    products,
    isLoading,
    error,
  };
};

export default UseHandleData;
