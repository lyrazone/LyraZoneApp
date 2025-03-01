import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../data/product"; // Adjust the import path based on your project structure
import "../styles/styles.css";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // ✅ Correctly type the state

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">LYRA ZONE SOLUTIONS</div>

      {/* Product List Section */}
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`src/assets/images/${product.image}.png`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Demo</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p> // ✅ Display message if no products are available
        )}
      </div>

      {/* Footer */}
      <div className="footer">Social Media Icons & News Slide</div>
    </div>
  );
};

export default ProductList;
