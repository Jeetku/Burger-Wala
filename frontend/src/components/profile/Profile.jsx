import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/profile pic.jpg";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
const Profile = () => {
  const optionsY = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  const optionsX = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main>
        <motion.img
          src={me}
          alt="profile"
          {...optionsY}
          transition={{ delay: 0.3 }}
        />
        <motion.h5 {...optionsY} transition={{ delay: 0.3 }}>
          Jeetesh Kumar
        </motion.h5>
        <motion.div {...optionsY} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{ borderRadius: 0, backgroundColor: "rgb(45,45,45)" }}
          >
            <MdDashboard /> Dashboard
          </Link>
        </motion.div>
        <motion.div {...optionsX} transition={{ delay: 0.5 }}>
          <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button {...optionsX} transition={{ delay: 0.6 }}>
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
