import { useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Homepage = () => {
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const result = await axios("http://localhost:4001/products");
      setProduct(result.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert("Fail to fetch product data!");
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      const updateProduct = product.filter((item) => item.id !== id);
      setProduct(updateProduct);
      alert("Delete Success!");
    } catch (error) {
      alert("Delete Fail!");
    }
  };

  return (
    <>
      <div className="title">
        <h1>Products</h1>
        <button onClick={() => navigate("/products/create")}>
          Create Product
        </button>
      </div>

      <div className="product-list">
        {product.map((product, index) => {
          return (
            <div className="product" id="product" key={index}>
              <div className="product-image">
                <img src={product.image} alt="a product" />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name}</h1>
                <h3>Produce price: {product.price}</h3>
                <p>{product.description}</p>
                <div className="product-action">
                  <button
                    onClick={() => navigate(`/products/view/${product.id}`)}
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/products/edit/${product.id}`)}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <button
                className="delete"
                onClick={() => handleDelete(product.id)}
              >
                X
              </button>
            </div>
          );
        })}
        <div className="loading">
          {isError ? <h1>Request failed ...</h1> : null}
          {isLoading ? <h1>Loading ...</h1> : null}
        </div>
      </div>
    </>
  );
};

export default Homepage;
