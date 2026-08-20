import { useState } from "react";
import { createItem } from "../../services/api";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    category: "Tops",
    size: "",
    condition: "Good",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createItem({
        ...formData,
        price: 0,
        type: "donate",
      });

      setMessage("Thank you! Your item has been donated.");

      setFormData({
        name: "",
        category: "Tops",
        size: "",
        condition: "Good",
        image: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="donate-page">
      <div className="donate-container">

        <div className="donate-header">
          <p>DONATE</p>

          <h1>Give something a second life.</h1>

          <span>
            Donate clothes you no longer need and help someone else discover
            something special.
          </span>
        </div>

        <form className="donate-form" onSubmit={handleSubmit}>

          <label>
            Item name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Blue cotton sweater"
              required
            />
          </label>

          <div className="donate-row">

            <label>
              Category
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Tops</option>
                <option>Bottoms</option>
                <option>Dresses</option>
                <option>Shoes</option>
                <option>Accessories</option>
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

          <label>
            Condition
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <option>Like New</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </label>

          <label>
            Image URL
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell people about the item..."
              rows="5"
            />
          </label>

          <button type="submit">
            Donate Item
          </button>

          {message && (
            <p className="donate-message">
              {message}
            </p>
          )}

        </form>
      </div>
    </main>
  );
}

export default Donate;