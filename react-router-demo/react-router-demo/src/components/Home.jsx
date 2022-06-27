import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate("order-summary", { replace: true })}>Place Order</button>
    </div>
  );
};