import "./createPostPage.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePostPage = ({ title }) => {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setimgInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const navigate = useNavigate();

  const createProduct = async () => {
    try {
      const newProductData = {
        name: nameInput,
        image: imgInput,
        price: priceInput,
        description: descriptionInput,
      };
      await axios.post("http://localhost:4001/products", newProductData);
      navigate("/");
      alert("create Success!");
    } catch (error) {
      alert("create Fail!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct();
  };

  return (
    <>
      <Navbar title="Create Product Page" />

      <div className="product-form" onSubmit={handleSubmit}>
        <form className="input-container">
          <h1>Create Product Form</h1>
          <label>
            {" "}
            Name{" "}
            <input
              type="text"
              name="name"
              placeholder="Enter name here"
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
              value={nameInput}
            />
          </label>
          <label>
            {" "}
            Image Url{" "}
            <input
              type="text"
              name="name"
              placeholder="Enter image here"
              onChange={(e) => {
                setimgInput(e.target.value);
              }}
              value={imgInput}
            />
          </label>
          <label>
            {" "}
            Price{" "}
            <input
              type="text"
              name="name"
              placeholder="Enter price here"
              onChange={(e) => {
                setPriceInput(e.target.value);
              }}
              value={priceInput}
            />
          </label>
          <label>
            {" "}
            Description{" "}
            <textarea
              id="description"
              name="description"
              placeholder="Enter description here"
              onChange={(e) => {
                setDescriptionInput(e.target.value);
              }}
              value={descriptionInput}
              rows={4}
              cols={30}
            ></textarea>
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreatePostPage;
