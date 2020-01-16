import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DisCard from "../src/components/disCard";

function App() {
  const [blockData, setBlockData] = useState();
  const [userData, setUserData] = useState();

  // const handleChange = e => {
  //   setUserData(e.target.value);
  //   console.log("user test:", userData);
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/chain")
  //     .then(res => {
  //       console.log("resTest:", res.data.chain);
  //       setUserData(res.data.chain);
  //     })

  //     .catch(err => console.log(err));
  // }, []);

  return (
    <div className="App">
      <DisCard />
      {/* <form>
        <div className="group">
          <input
            type="name"
            name="name"
            placeholder="Enter a name"
            onChange={handleChange}
          />
        </div>
      </form> */}
      {/* <>{blockData.map(el => console.log(el))}</> */}
      {/* 
      {blockData ? (
        blockData.map(el => (
          <>
            {el.transactions.map(y => (
              <>
                {userData === y.recipient ? (
                  <>
                    <h3>From: {y.sender}</h3>
                    <h3>To: {y.recipient}</h3>
                    <h3>Sent Amount: {y.amount}</h3>
                    <h3>Total Amount: {(y.amount += y.amount)}</h3>
                  </>
                ) : (
                  <h2>needs input</h2>
                )}
              </>
            ))}
          </>
        ))
      ) : (
        <h2>Loading, please wait</h2>
      )} */}
      <h1>This is my wallet app</h1>
      <button>Get Data</button>
    </div>
  );
}

export default App;
