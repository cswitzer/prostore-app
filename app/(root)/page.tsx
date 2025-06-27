import ProductList from "@/product/product-list";
import sampleData from "@/db/sample-data";

const Homepage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Featured Products"
        limit={4}
      />
    </>
  );
};

export default Homepage;
