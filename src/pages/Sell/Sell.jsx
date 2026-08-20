import { useState } from "react";
import { createItem } from "../../services/api";
import "./Sell.css";

function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Tops",
    size: "",
    condition: "Good",
    price: "",
    image: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // IMAGE UPLOAD FROM FINDER
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (!selectedImage) return;

    const reader = new FileReader();

    reader.onload = () => {
      setFormData((previous) => ({
        ...previous,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createItem({
        ...formData,
        price: Number(formData.price),
        type: "sell",
      });

      setMessage("Item listed successfully!");

      setFormData({
        name: "",
        category: "Tops",
        size: "",
        condition: "Good",
        price: "",
        image: "",
        description: "",
      });

      // Reset file input
      e.target.reset();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="sell-page">
      <div className="sell-container">

        {/* HEADER */}
        <div className="sell-header">
          <p>SELL</p>

          <h1>Give your clothes a new home.</h1>

          <span>
            List an item and let someone else enjoy it.
          </span>
        </div>

        {/* FORM */}
        <form className="sell-form" onSubmit={handleSubmit}>

          {/* ITEM NAME */}
          <label>
            Item name

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Vintage denim jacket"
              required
            />
          </label>

          {/* CATEGORY + SIZE */}
          <div className="sell-row">

            <label>
              Category

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Dresses">Dresses</option>
                <option value="Shoes">Shoes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </label>

            <label>
              Size

              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="M"
                required
              />
            </label>

          </div>

          {/* CONDITION + PRICE */}
          <div className="sell-row">

            <label>
              Condition

              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
              >
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </label>

            <label>
              Price

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="25"
                min="0"
                required
              />
            </label>

          </div>

          {/* IMAGE UPLOAD */}
          <label>
            Image

            <input
              type="file"
              name="image"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleImageChange}
            />
          </label>

          {/* DESCRIPTION */}
          <label>
            Description

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell people about your item..."
              rows="5"
            />
          </label>

          {/* SUBMIT */}
          <button type="submit">
            List Item
          </button>

          {/* MESSAGE */}
          {message && (
            <p className="sell-message">
              {message}
            </p>
          )}

        </form>
      </div>
    </main>
  );
}

export default Sell;