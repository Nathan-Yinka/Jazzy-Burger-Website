import React from "react";
import { useState, createContext, useEffect } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
const dataContextCreated = createContext({});

const DataContext = ({ children }) => {
  const { data, isLoading, fetchError } = useAxiosFetch(
    "https://eggys.onrender.com/jazzyburger/all"
    // `http://localhost:8000/api/product/`
  );
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [heart, setHeart] = useState([]);

  useEffect(() => {
    setProducts(
      data.map((product) => {
        product.id = product._id;
        product.count = 1;
        delete product._id;
        return product;
      })
    );
  }, [data]);
  const handleIncrease = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.count++;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleReduce = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.count > 1) {
        product.count--;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const toCartButton = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const toggleHeart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.heart = !product.heart;
      }
      return product;
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    const toCart = () => {
      setCart(products.filter((product) => product.cart && product));
      setHeart(products.filter((product) => product.heart && product));
    };
    console.log(heart);
    toCart();
  }, [products]);

  const utili = {
    products,
    handleIncrease,
    handleReduce,
    toCartButton,
    cart,
    isLoading,
    fetchError,
    heart,
    toggleHeart,
  };
  return (
    <dataContextCreated.Provider value={utili}>
      {children}
    </dataContextCreated.Provider>
  );
};

export { DataContext, dataContextCreated };
