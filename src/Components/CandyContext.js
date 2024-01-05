// CandyContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CandyContext = createContext();

export const useCandy = () => {
  return useContext(CandyContext);
};

export const CandyProvider = ({ children }) => {
  const storedCandies = JSON.parse(localStorage.getItem("candies")) || [];
  const [candies, setCandies] = useState(storedCandies);
  const [cart,setCart] = useState([])

  useEffect(() => {
    localStorage.setItem("candies", JSON.stringify(candies));
  }, [candies]);

  const addCandy = (newCandy) => {
    setCandies((prevCandies) => {
      const updatedCandies = [...prevCandies, newCandy];
      localStorage.setItem("candies", JSON.stringify(updatedCandies));
      console.log("Updated Candies:", updatedCandies);
      return updatedCandies;
    });
  };

  const addToCart = (candy) =>{
    setCart((prevCart)=>[...prevCart,candy])
  }
  return (
    <CandyContext.Provider value={{ candies,cart,addToCart, addCandy }}>
      {children}
    </CandyContext.Provider>
  );
};
