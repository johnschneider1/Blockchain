import React, { useState, useEffect } from "react";
import axios from "axios";

const DisCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/chain").then(res => {
      setData(res.data.chain);

      console.log("res", res.data.chain);
    });
  }, []);
  console.log("data", data);

  return (
    <>
      <div>
        <h2>u got display!</h2>
        {data &&
          data.map(block => {
            return block.transactions.map(transaction => {
              return (
                <h2>
                  <h3>Receipient:{transaction.recipient}</h3>
                  <h3>
                    Amount:
                    {transaction.amount}
                  </h3>
                  <h3>TimeStamp:{block.timestamp}</h3>
                </h2>
              );
            });
          })}
      </div>
    </>
  );
};
export default DisCard;
