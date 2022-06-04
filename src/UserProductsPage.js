import React from "react";
import { FaApple, FaAppStore, FaRegGrin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserProductsPage() {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const id = location.state[1];

  const HandleNext = (e) => {
    console.log("intital page number"+pageNumber);
    setPageNumber(pageNumber => pageNumber + 1  );
    //alert("Button clicked and Value of Page Number is +pageNumber);
    GetData();
    console.log(" Button clicked ,INCREMENTED ,PAGE NUMBER IS" + pageNumber);
    console.log("after setting products products is " + products);
    console.log("handleNext FUNCTION CALL OVER ");
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update
    GetData();
  }, []);

  const GetData = async () => {
    console.log("USER ID RECIEVED " + id);
    const response = await fetch(
      "http://127.0.0.1:8000/api/recommendProducts",
      {
        method: "POST",
        //headers: {'Access-Control-Allow-Origin': '*','Content-type':'application/json'},
        body: JSON.stringify({
          uid: id,
          page_no: pageNumber,
        }),
      }
    );
    const data = await response.json();
    setProducts(data);
  };

  const upperText = {
    flex: 1,
    paddingLeft: "30px",
    fontFamily: "Arial",
    // justifyContent:'center',
    display: "flex",
    // alignItems: 'center',
    marginRight: 0,
    fontSize: 25,
    // color:' #33d1ff '
  };

  const pName = {
    fontFamily: "Helvetica",
    textAlign: "left",
  };

  const lastLable = {
    fontFamily: "Helvetica",
    borderBottom: "1px",
  };

  const lhsLabel = {
    display: "flex ",
    flexDirection: "row",
    fontFamily: "Helvetica",
  };
  const rhsLabel = { paddingLeft: "10px", fontFamily: "Helvetica" };
  const buttonStyle = { paddingLeft: "10px", fontFamily: "Helvetica" };

  return (
    <div>
      <h1 style={upperText}>
        {" "}
        <FaApple />{" "}
        <p1 style={{ paddingLeft: "10px" }}>Welcome to Our Store </p1>{" "}
        {/* <p1 style={{ paddingLeft: "10px" }}>Welcome Back to Our Store Batman !</p1>{" "} */}
      </h1>
      <h2
        style={{
          fontFamily: "Helvetica",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          color: " ",
        }}
      >
        <p1 style={{ paddingRight: "10px" }}> Top Products for You ! </p1>{" "}
        {/* <p1 style={{ paddingRight: "10px" }}> Popular Products Around You ! </p1>{" "} */}
        <FaRegGrin />
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "flexStart",
          flexDirection: "row",
          flex: 1,
          flexWrap: "wrap",
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {
          //products &&

          products.map(function (product, index) {
            return (
              <div
                style={{
                  flexDirection: "column",
                  width: "400px",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  borderBottom: "1px",
                  borderLeft: "1px",
                  borderRight: "1px",
                  borderTop: "1px",
                  alignItems: "flexStart",
                }}
              >
                <p1 style={lhsLabel}>
                  {" "}
                  Relevant to You :{" "}
                  <p1 style={rhsLabel}> {product.recommendor_score} % </p1>
                </p1>
                <p1 style={lhsLabel}>
                  {" "}
                  Product Name :{" "}
                  <p1 style={rhsLabel}> {product.product_name} </p1>
                </p1>
                <p1 style={lhsLabel}>
                  {" "}
                  Selling Price :{" "}
                  <p1 style={rhsLabel}> {product.selling_price} </p1>
                </p1>
                <p1 style={lhsLabel}>
                  {" "}
                  Brand : <p1 style={rhsLabel}> {product.brand_name} </p1>
                </p1>
                <p1 style={lhsLabel}>
                  {" "}
                  Product Category :{" "}
                  <p1 style={rhsLabel}> {product.product_category} </p1>
                </p1>
                <p1 style={lhsLabel}>
                  {" "}
                  Discount Percent :{" "}
                  <p1 style={rhsLabel}> {product.discount_percent} </p1>
                </p1>
                <button
                  onClick={() =>
                    alert(
                      "Product ID " +
                        product.id +
                        " with name " +
                        product.product_name +
                        " PURCHASED"
                    )
                  }
                >
                  Purchase
                </button>
                <button
                  onClick={() =>
                    alert(
                      "Product ID " +
                        product.id +
                        " with name " +
                        product.product_name +
                        " ADDED TO CART"
                    )
                  }
                >
                  Add to Cart
                </button>
                <button
                  onClick={() =>
                    alert(
                      "Product ID " +
                        product.id +
                        " with name " +
                        product.product_name +
                        " ORDERED"
                    )
                  }
                >
                  Order
                </button>
              </div>
            );
          })
        }
      </div>

      <div
        style={{
          paddingLeft: "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <button onClick={() => HandleNext()}>Next Page</button>
      </div>
    </div>
  );
}
