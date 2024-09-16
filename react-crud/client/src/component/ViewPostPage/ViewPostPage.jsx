import "./viewPostPage.css";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewPostPage = ({ title }) => {

  const [nameInput, setNameInput] = useState("");
  const [imgInput, setimgInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const { id } = useParams()

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      setNameInput(response.data.data.name);
      setimgInput(response.data.data.image);
      setPriceInput(response.data.data.price);
      setDescriptionInput(response.data.data.description); 
    } catch (error) {
      console.log(error)
      alert("Fail to fetch product data!")
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Navbar title="View Product Page" />

      <div className="view-product-container">
        <div className="product">
        <div className="product-image">
          <img
            src={imgInput}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className="product-detail">
          <h1>Name : {nameInput}</h1>
          <h3>Price : {priceInput}</h3>
          <p>{descriptionInput}</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default ViewPostPage;
