import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./Products.css";
import {
  Box,
  Button,
  SimpleGrid,
  Checkbox,
  Select,
  Image,
  Container,
  Text,
  Stack,
  Heading,
} from "@chakra-ui/react";

import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pro, setpro] = useState([]);
  const [results, setResults] = useState(0);
  const [brandfilter, setBrandFilter] = useState("ALL");

  const totalPosts = pro.length;
  const postPerPage = 6;

  const getData = async () => {
    let res = await axios.get(`https://bluefly-server.onrender.com/product`);
    // console.log("res", res.data.data);
    setpro(res.data.data);
    setResults(res.data.data.length);
  };

  useEffect(() => {
    getData();
  }, []);

  const handelSort = (by) => {
    if (by === "a-z") {
      const sorted = pro.sort((a, b) => {
        if (a.title > b.title) {
          return +1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      });
      setpro([...sorted]);
    } else if (by === "z-a") {
      const sorted = pro.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return +1;
        } else {
          return 0;
        }
      });
      setpro([...sorted]);
    } else if (by === "lowprice") {
      let sorted = pro.sort((a, b) => {
        return a.price - b.price;
      });
      let newData = [...sorted];
      setpro(newData);
    } else if (by === "highprice") {
      let sorted = pro.sort((a, b) => {
        return b.price - a.price;
      });
      let newData = [...sorted];
      setpro(newData);
    } else if (by === "all") {
      getData();
    }
  };

  if (pro.length === 0)
    return (
      <Text as="i" fontSize={"5xl"} color={"grey"}>
        Please Wait ...
      </Text>
    );

  return (
    <div className="mainbody" style={{ marginTop: "160px" }}>
      <div>
        <h1 style={{ fontSize: "40px" }}>Women's Jewelry & Watches</h1>

        <div className="sec">
          <div>
            <h3>{`Showing ${results} results for "Women's Bracelets"`}</h3>
          </div>

          {/* -------------------------sorting ---------------------*/}
          <div className="sorting">
            <Select width="200px" onChange={(e) => handelSort(e.target.value)}>
              <option value="all">BESTSELLING</option>
              <option value="a-z">TITLE A-Z</option>
              <option value="z-a">TITLE Z-A</option>
              <option value="lowprice">PRICE LOW TO HIGH</option>
              <option value="highprice">PRICE HIGH To LOW</option>
            </Select>
          </div>
        </div>

        {/* -------------------------product ---------------------*/}
        <SimpleGrid columns={[1, 2, 3]}>
          {/* map the pro data */}

          {pro &&
            pro.map((el) => (
              <ProductCard
                key={el._id}
                id={el._id}
                img1={el.img1}
                img2={el.img2}
                img4={el.img4}
                img3={el.img3}
                title={el.title}
                owner={el.owner}
                price={el.price}
                discounted_price={el.discounted_price}
                saveupto={el.saveupto}
              />
            ))}
        </SimpleGrid>
      </div>

      {/* -------------------------pagination ---------------------*/}
      {totalPosts > postPerPage && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={totalPosts}
          postPerPage={postPerPage}
        />
      )}
    </div>
  );
};

export default Products;
