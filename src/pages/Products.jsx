import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import productsData from "../assets/products.json";
import { Link } from "react-router-dom";
import _ from "lodash";

const ITEMS_PER_PAGE = 9;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    // Load products data
    setProducts(productsData);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredProducts = products.filter(
    (product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.product_category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = _.orderBy(filteredProducts, [sortKey], [sortOrder]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button onClick={() => handleSort("product_name")}>Sort by Name</button>
      <button onClick={() => handleSort("product_category")}>
        Sort by Category
      </button>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <div className="container flex flex-wrap items-center">
        {displayedProducts.map((product) => (
          <Link
            to={`/product/${product.product_id}`}
            key={product.product_id}
            className="hover:shadow-lg hover:grow w-full xl:w-1/3 md:w-1/2 flex flex-col justify-center items-center p-4"
          >
            <div className="">
              <img src={product.product_image} className="" />
              <h2>{product.product_name}</h2>
              <p>{product.product_category}</p>
              <b>{`$${product.product_price}`}</b>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
