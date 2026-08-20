import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ItemDetail.css";

import blackPeacoat from "../../assets/clothes/black-peacoat.png";
import whiteDress from "../../assets/clothes/white-dress.png";
import pumaShoes from "../../assets/clothes/puma-shoes.png";
import leatherJacket from "../../assets/clothes/leather-jacket.png";
import stripedTshirt from "../../assets/clothes/stripped-tshirt.png";
import denimSkirt from "../../assets/clothes/denim-skirt.png";
import camiTop from "../../assets/clothes/cami-top.png";
import gingham from "../../assets/clothes/gin-gham.png";

const fallbackProducts = [
  {
    id: 1,
    name: "Black Pea Coat",
    price: 5430,
    condition: "Like New",
    category: "Jackets",
    size: "M",
    image: blackPeacoat,
    description:
      "A classic black pea coat in excellent condition. Perfect for casual outfits and cooler days.",
  },
  {
    id: 2,
    name: "White Polka Dress",
    price: 3200,
    condition: "Like New",
    category: "Dresses",
    size: "S",
    image: whiteDress,
    description: "A beautiful white polka-dot dress in like-new condition.",
  },
  {
    id: 3,
    name: "Puma Shoes",
    price: 12000,
    condition: "Like New",
    category: "Shoes",
    size: "M",
    image: pumaShoes,
    description: "Stylish Puma shoes in excellent condition.",
  },
  {
    id: 4,
    name: "Brown Leather Jacket",
    price: 3800,
    condition: "Like New",
    category: "Jackets",
    size: "L",
    image: leatherJacket,
    description: "A classic brown leather jacket.",
  },
  {
    id: 5,
    name: "Striped T-Shirt",
    price: 1900,
    condition: "Like New",
    category: "Tops",
    size: "M",
    image: stripedTshirt,
    description: "A comfortable striped t-shirt.",
  },
  {
    id: 6,
    name: "Denim Mini Skirt",
    price: 2300,
    condition: "Like New",
    category: "Bottoms",
    size: "S",
    image: denimSkirt,
    description: "A classic denim mini skirt.",
  },
  {
    id: 7,
    name: "Cami Top",
    price: 3100,
    condition: "Like New",
    category: "Tops",
    size: "S",
    image: camiTop,
    description: "A simple and elegant cami top.",
  },
  {
    id: 8,
    name: "Gingham Dress",
    price: 4500,
    condition: "Like New",
    category: "Dresses",
    size: "M",
    image: gingham,
    description: "A stylish gingham dress.",
  },
];

function ItemDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // First try to use the item passed from Explore
  const itemFromExplore = location.state?.item;

  // If the page is refreshed, use the fallback product
  const fallbackItem = fallbackProducts.find(
    (product) => String(product.id) === String(id)
  );

  const item = itemFromExplore || fallbackItem;

  if (!item) {
    return (
      <main className="item-detail-page">
        <div className="item-not-found">
          <h1>Item not found</h1>

          <button onClick={() => navigate("/explore")}>
            Back to Explore
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="item-detail-page">
      <div className="item-detail-container">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Explore
        </button>

        <div className="item-detail-card">

          <div className="item-detail-image">
            <img
              src={item.image}
              alt={item.name}
            />
          </div>

          <div className="item-detail-info">

            <p className="item-detail-label">
              CLOSET CYCLE
            </p>

            <h1>{item.name}</h1>

            <p className="item-detail-price">
              Rs. {Number(item.price || 0).toLocaleString()}
            </p>

            <span className="item-detail-condition">
              {item.condition || "Like New"}
            </span>

            <div className="item-details">

              <div className="detail-row">
                <span>Category</span>
                <strong>{item.category}</strong>
              </div>

              <div className="detail-row">
                <span>Size</span>
                <strong>{item.size}</strong>
              </div>

              <div className="detail-row">
                <span>Condition</span>
                <strong>{item.condition}</strong>
              </div>

            </div>

            <div className="item-description">
              <h2>Description</h2>

              <p>
                {item.description ||
                  "This item is in great condition and ready for a new home."}
              </p>
            </div>

            <div className="item-actions">
              <button className="buy-button">
                Buy Now
              </button>

              <button className="swap-button">
                Request Swap
              </button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default ItemDetail;