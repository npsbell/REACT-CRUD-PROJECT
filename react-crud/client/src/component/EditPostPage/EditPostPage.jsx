import "./editPostPage.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const EditPostPage = ({ title }) => {
  const [nameInput, setNameInput] = useState("");
  const [imgInput, setimgInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      setNameInput(response.data.data.name);
      setimgInput(response.data.data.image);
      setPriceInput(response.data.data.price);
      setDescriptionInput(response.data.data.description);
    } catch (error) {
      console.log(error);
      alert("Fail to fetch product data!");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const editProduct = async () => {
    try {
      const newProduct = {
        name: nameInput,
        image: imgInput,
        price: priceInput,
        description: descriptionInput,
      };
      await axios.put(`http://localhost:4001/products/${id}`, newProduct);
      navigate("/");
      alert("Edit Success!");
    } catch (error) {
      console.log(error);
      alert("Edit Fail!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editProduct();
  };

  return (
    <>
      <Navbar title="Edit Product Page" />

      <div className="product-form" onSubmit={handleSubmit}>
        <form className="input-container" id="input-container">
          <h1>Edit Product Form : {nameInput}</h1>
          <label>
            {" "}
            Name{" "}
            <input
              type="text"
              name="name"
              placeholder="Enter name here"
              onChange={(e) => setNameInput(e.target.value)}
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
              onChange={(e) => setimgInput(e.target.value)}
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
              onChange={(e) => setPriceInput(e.target.value)}
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
              onChange={(e) => setDescriptionInput(e.target.value)}
              value={descriptionInput}
              rows={4}
              cols={30}
            ></textarea>
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditPostPage;
