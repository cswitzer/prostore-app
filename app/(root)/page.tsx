import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Featured Products" limit={4} />
    </>
  );
};

export default Homepage;
