import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/profile pic.jpg";

const Founder = () => {
  const optionsX = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="founder">
        <motion.div {...optionsX}>
          <img src={me} alt="founder_Image" height={200} width={200} />
          <h3>Jeetesh Singh</h3>
          <p>Hi Everyone, I am Jeetesh Singh, Founder of TCS Burger Wala.</p>
          <br />
          <p>Our Aim is to create the most tasty burger on the planet. </p>
        </motion.div>
      </section>
    </>
  );
};

export default Founder;
