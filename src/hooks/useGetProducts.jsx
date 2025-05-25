import { useState, useEffect } from "react";
import mockAPI from "../api/mockapi";

function useGetProducts() {
  const [products, setProducts] = useState();

  async function apiGet() {
    // i can use the await keyword
    try {
      const response = await mockAPI.get("/product");
      // console.log("GET status:", response.status);
      // console.log("GET data:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    console.log("effect happening now!!!!");
    apiGet();
    // setProducts([]);
    // very common mistake that people make
    // logic inside here
    // if (hasClicked) {
    //   apiGet();
    //   setClicked(false);
    // }

    return () => {
      // will execute on dismount
      // you can stop the network call / cancel it so that it will not complete
    };
  }, []);

  return {
    products,
    apiGet,
  };
}

export default useGetProducts;
