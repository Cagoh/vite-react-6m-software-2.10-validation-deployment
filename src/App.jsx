import { useState, useEffect } from "react";
import mockAPI from "./api/mockapi";

import "./App.css";
import Table from "./components/Table";
import AddForm from "./components/AddForm";

function App() {
  const [products, setProducts] = useState();
  const [itemId, setItemId] = useState();

  async function apiGetPSI() {
    // i can use the await keyword
    // try {
    //   const response = await mockAPI.get("/environment/psi");
    //   console.log("GET status:", response.status);
    //   console.log("GET data:", response.data);
    //   setProducts(response.data);
    // } catch (error) {
    //   console.log(error.message);
    // }

    try {
      const response = await mockAPI.get("/environment/psi");
      console.log("Raw API data:", response.data);

      // Extract PSI readings for each region
      const psiReadings = response.data.items[0].readings.psi_twenty_four_hourly;
      console.log("psiReadings:", psiReadings);

      const regions = ['west', 'east', 'central', 'south', 'north'];
      const formattedData = regions.map((location, index) => ({
        id: index + 1,
        location,
        valuePSI: psiReadings[location],
      }));



      console.log("Formatted data:", formattedData);
      setProducts(formattedData); // Pass to Table component
    } catch (error) {
      console.error("API Error:", error.message);
    }

  }

  // please do not do this!!!!
  // apiGet();

  // useEffect(() => {
  //   console.log("effect happening now!!!!");
  //   apiGet();
  //   // setProducts([]);
  //   // very common mistake that people make
  //   // logic inside here
  //   // if (hasClicked) {
  //   //   apiGet();
  //   //   setClicked(false);
  //   // }

  //   return () => {
  //     // will execute on dismount
  //     // you can stop the network call / cancel it so that it will not complete
  //   };
  // }, []);

  async function apiGetId(id) {
    try {
      const response = await mockAPI.get(`/product/${id}`);
      console.log("GET status:", response.status);
      console.log("GET data:", response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function apiPost(newProduct) {
    try {
      const response = await mockAPI.post("/product", newProduct);
      console.log(response.data);
      apiGet();
    } catch (error) {
      // where your network is down - singtel
      // the server is on fire, so the server is down
      // VPN, security, firewall
      //
      console.log(error.message);
    }
  }

  async function apiPut(id) {
    try {
      const response = await mockAPI.put(`/product/${id}`, {
        name: "SAMUEL NEW PRODUCT",
        quantiy: 234,
        price: 777,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function apiDelete(id) {
    try {
      const response = await mockAPI.delete(`/product/${id}`);
      apiGet();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Air Quality</h1>
      <button onClick={apiGetPSI}>Load PSI data...</button>
      {/* <button onClick={() => apiGetId(393)}>Load 1 Product</button>
      <button onClick={() => apiPost()}>Create a product</button>
      <button onClick={() => apiPut(438)}>Edit a product</button>
      <button onClick={() => apiDelete(438)}>Delete a product</button> */}
      {/* <AddForm handlerAddItem={apiPost} /> */}
      {/* <div>
        <label>Item ID To Delete: </label>
        <input
          type="text"
          onChange={(event) => setItemId(event.target.value)}
        />
        <button onClick={() => apiDelete(itemId)}>Delete</button>
      </div> */}
      {/* <Table list={products} onDelete={(id) => apiDelete(id)} /> */}
      <Table list={products} />
    </div>
  );
}

export default App;
