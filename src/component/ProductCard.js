import React from "react";

const ProductCard = (prps) => {
  return (
    <div style={{ background: "#EAECF0", width: "300px", height: "380px" }}>
      <span>{prps.arg.category}</span>
      <div>
        <img
          src={prps.arg.image}
          alt=""
          style={{
            height: "200px",
            width: "230px",
            textAlign: "center",
            marginTop: "1rem",
          }}
        />
      </div>
      <div>
        <p>Product Name: {prps.arg.title}</p>
        <p>Price: {prps.arg.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
