import { React, useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import axios from "axios";

const Products = () => {
  const [state, setState] = useState();
  const [productData, setProductData] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (productData.length > 0) {
      setLoding(false);
    }
  }, [productData]);

  return (
    <div>
      {!loding ? (
        <div
          style={{
            background: "var(--planCard)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              margin: "1rem 1rem 0 80%",

              alignItems: "right",
            }}
          >
            Select Category
          </h3>
          <select
            onChange={(e) => setState(e.target.value)}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 1rem 3% 80%",

              alignItems: "right",
              height: "15rem",
              width: "15rem",
            }}
          >
            <option value="All">All</option>
            <option value="men's clothing">Mens clothing</option>
            <option value="women's clothing">Womens clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          <hr style={{ color: "black", width: "100%" }}></hr>
          <div
            style={{
              margin: "1rem 1rem 1rem 4rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "1rem",
            }}
          >
            {!state || state === "All"
              ? productData.map((user) => (
                  <div className="user" key={user.id}>
                    <ProductCard arg={user} />
                  </div>
                ))
              : productData.map((user) =>
                  !state.localeCompare(user.category) ? (
                    <div>
                      <ProductCard arg={user} />
                    </div>
                  ) : (
                    console.log()
                  )
                )}
          </div>
        </div>
      ) : (
        console.log("wait")
      )}
    </div>
  );
};

export default Products;
