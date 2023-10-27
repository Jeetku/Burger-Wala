import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiArmoredBoomerang } from "react-icons/gi";

const Orders = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdfsfdfsfd</td>
                <td>Processing</td>
                <td>23</td>
                <td>₹{212322}</td>
                <td>COD</td>
                <td>Jeet</td>
                <td>
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>
                  <button type="">
                    <GiArmoredBoomerang />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Orders;
