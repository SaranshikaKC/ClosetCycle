import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../services/api";
import "./Explore.css";

// Local clothing images
import blackPeacoat from "../../assets/clothes/black-peacoat.png";
import camiTop from "../../assets/clothes/cami-top.png";
import denimSkirt from "../../assets/clothes/denim-skirt.png";
import gingham from "../../assets/clothes/gin-gham.png";
import leatherJacket from "../../assets/clothes/leather-jacket.png";
import pumaShoes from "../../assets/clothes/puma-shoes.png";
import stripedTshirt from "../../assets/clothes/stripped-tshirt.png";
import whiteDress from "../../assets/clothes/white-dress.png";


// Local images for fallback products
const sampleImages = [
  blackPeacoat,
  whiteDress,
  pumaShoes,
  leatherJacket,
  stripedTshirt,
  denimSkirt,
  camiTop,
  gingham,
];


// Fallback products
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
      "A classic black pea coat in excellent condition. Perfect for a timeless wardrobe.",
  },

  {
    id: 2,
    name: "White Polka Dress",
    price: 3200,
    condition: "Like New",
    category: "Dresses",
    size: "S",
    image: whiteDress,
    description:
      "A beautiful white polka dot dress that is perfect for casual and special occasions.",
  },

  {
    id: 3,
    name: "Puma Shoes",
    price: 12000,
    condition: "Like New",
    category: "Shoes",
    size: "M",
    image: pumaShoes,
    description:
      "Comfortable Puma shoes in great condition.",
  },

  {
    id: 4,
    name: "Brown Leather Jacket",
    price: 3800,
    condition: "Like New",
    category: "Jackets",
    size: "L",
    image: leatherJacket,
    description:
      "A stylish brown leather jacket with a classic look.",
  },

  {
    id: 5,
    name: "Striped T-Shirt",
    price: 1900,
    condition: "Like New",
    category: "Tops",
    size: "M",
    image: stripedTshirt,
    description:
      "A comfortable striped T-shirt that works well for everyday outfits.",
  },

  {
    id: 6,
    name: "Denim Mini Skirt",
    price: 2300,
    condition: "Like New",
    category: "Bottoms",
    size: "S",
    image: denimSkirt,
    description:
      "A classic denim mini skirt in great condition.",
  },

  {
    id: 7,
    name: "Cami Top",
    price: 3100,
    condition: "Like New",
    category: "Tops",
    size: "S",
    image: camiTop,
    description:
      "A simple and stylish cami top.",
  },

  {
    id: 8,
    name: "Gingham Dress",
    price: 4500,
    condition: "Like New",
    category: "Dresses",
    size: "M",
    image: gingham,
    description:
      "A cute gingham dress with a timeless style.",
  },
];


function Explore() {
  const [items, setItems] = useState(fallbackProducts);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("Newest");

  const [loading, setLoading] = useState(true);


  // Get items from API
  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await getItems();

        if (
          Array.isArray(response.data) &&
          response.data.length > 0
        ) {
          setItems(response.data);
        }
      } catch (error) {
        console.log(
          "Using available clothing items."
        );
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);


  // Search + category filtering + sorting
  const filteredItems = [...items]
    .filter((item) => {

      const matchesSearch = item.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        item.category === category;

      return matchesSearch && matchesCategory;
    })

    .sort((a, b) => {

      if (sort === "Price Low") {
        return Number(a.price) - Number(b.price);
      }

      if (sort === "Price High") {
        return Number(b.price) - Number(a.price);
      }

      return 0;
    });


  return (
    <main className="explore-page">

      {/* =========================
          HERO
      ========================== */}

      <section className="explore-header">

        <div>

          <p className="explore-label">
            CLOSET CYCLE
          </p>

          <h1>
            Explore
          </h1>

          <p className="explore-description">
            Discover pre-loved pieces and give great
            clothes another journey.
          </p>

        </div>


        {/* SEARCH */}

        <div className="explore-search">

          <input
            type="text"
            placeholder="Search clothes, brands..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <span>
            ⌕
          </span>

        </div>

      </section>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <section className="explore-layout">


        {/* =========================
            FILTERS
        ========================== */}

        <aside className="filters">

          <div className="filter-heading">

            <h2>
              Filters
            </h2>

            <button
              onClick={() => {
                setCategory("All");
                setSearch("");
              }}
            >
              Clear all
            </button>

          </div>


          {/* CATEGORY */}

          <div className="filter-group">

            <h3>
              Category
            </h3>

            {[
              "All",
              "Tops",
              "Bottoms",
              "Dresses",
              "Jackets",
              "Bags",
              "Shoes",
              "Accessories",
            ].map((item) => (

              <label key={item}>

                <input
                  type="radio"
                  name="category"
                  checked={
                    category === item
                  }
                  onChange={() =>
                    setCategory(item)
                  }
                />

                {item}

              </label>

            ))}

          </div>


          {/* SIZE */}

          <div className="filter-group">

            <h3>
              Size
            </h3>

            {[
              "XS",
              "S",
              "M",
              "L",
              "XL",
              "XXL",
            ].map((size) => (

              <label key={size}>

                <input
                  type="checkbox"
                />

                {size}

              </label>

            ))}

          </div>


          {/* CONDITION */}

          <div className="filter-group">

            <h3>
              Condition
            </h3>

            {[
              "Like New",
              "Gently Used",
              "Good",
              "Fair",
            ].map((condition) => (

              <label key={condition}>

                <input
                  type="checkbox"
                />

                {condition}

              </label>

            ))}

          </div>


          {/* PRICE */}

          <div className="filter-group">

            <h3>
              Price Range
            </h3>

            <input
              className="price-slider"
              type="range"
              min="0"
              max="10000"
            />

            <div className="price-labels">

              <span>
                Rs 0
              </span>

              <span>
                Rs 10000+
              </span>

            </div>

          </div>


          {/* COLOR */}

          <div className="filter-group">

            <h3>
              Color
            </h3>

            <div className="color-options">

              <span className="color gray"></span>

              <span className="color beige"></span>

              <span className="color green"></span>

              <span className="color black"></span>

            </div>

          </div>

        </aside>


        {/* =========================
            PRODUCTS
        ========================== */}

        <section className="products-section">


          {/* PRODUCTS HEADER */}

          <div className="products-top">

            <div>

              <h2>
                Explore Items
              </h2>

              <p>

                {loading
                  ? "Loading items..."
                  : `Showing ${filteredItems.length} items`}

              </p>

            </div>


            {/* SORT */}

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >

              <option value="Newest">
                Newest First
              </option>

              <option value="Price Low">
                Price: Low to High
              </option>

              <option value="Price High">
                Price: High to Low
              </option>

            </select>

          </div>


          {/* =========================
              EMPTY STATE
          ========================== */}

          {filteredItems.length === 0 ? (

            <div className="empty-products">

              <h2>
                No clothes found
              </h2>

              <p>
                Try another search or choose
                a different category.
              </p>

            </div>

          ) : (

            /* =========================
               PRODUCT GRID
            ========================== */

            <div className="product-grid">

              {filteredItems.map(
                (item, index) => (

                  <Link
                    key={item.id}
                    to={`/item/${item.id}`}
                    state={{ item }}
                    className="product-card-link"
                  >

                    <article className="product-card">


                      {/* IMAGE */}

                      <div className="product-image">

                        <img
                          src={
                            item.image ||
                            sampleImages[
                              index %
                                sampleImages.length
                            ]
                          }
                          alt={item.name}
                        />


                        {/* HEART */}

                        <button
                          type="button"
                          className="heart-button"
                          aria-label="Add to wishlist"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          ♡
                        </button>

                      </div>


                      {/* PRODUCT INFO */}

                      <div className="product-info">

                        <h3>
                          {item.name}
                        </h3>

                        <p className="product-price">
                          Rs.{" "}
                          {Number(
                            item.price || 0
                          ).toLocaleString()}
                        </p>

                        <span className="product-condition">
                          {item.condition ||
                            "Like New"}
                        </span>

                      </div>

                    </article>

                  </Link>

                )
              )}

            </div>

          )}


          {/* =========================
              PAGINATION
          ========================== */}

          <div className="pagination">

            <button>
              ‹
            </button>

            <button className="active">
              1
            </button>

            <button>
              2
            </button>

            <button>
              3
            </button>

            <button>
              4
            </button>

            <button>
              ›
            </button>

          </div>

        </section>

      </section>

    </main>
  );
}


export default Explore;