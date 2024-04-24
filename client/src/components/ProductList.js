import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]); // Holds the fetched product data
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("7"); // Default shoe size
  const [cart, setCart] = useState([]); // Holds the cart items

  // Fetch products from the backend on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // Update the state with the fetched products
      } catch (error) {
        console.error("Failed to fetch products:", error);
        // Handle the error, show an error message, etc.
      }
    };

    fetchProducts();
  }, []);

  // Function to handle adding products to the cart
  const addToCart = (product, size) => {
    const newCartItem = { ...product, size };
    setCart([...cart, newCartItem]);
    alert(`Added ${product.name} size ${size} to cart!`);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <div
          key={product._id} // Use _id if your database is MongoDB
          style={{
            width: "30%",
            margin: "1%",
            padding: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            cursor: "pointer",
          }}
          onClick={() => {
            setSelectedProduct(product);
            setSelectedSize("7"); // Reset to default size when a product is clicked
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}

      {selectedProduct && (
        <div
          className="modal open"
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "50%",
            padding: "20px",
            backgroundColor: "white",
            overflowY: "auto",
            maxHeight: "80vh",
            zIndex: 100,
          }}
        >
          <img
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <h2>
            {selectedProduct.name} - ${selectedProduct.price}
          </h2>
          <p>{selectedProduct.description}</p>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {["7", "8", "9", "10", "11", "12"].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
          <button
            onClick={() => addToCart(selectedProduct, selectedSize)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
