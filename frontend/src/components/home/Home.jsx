import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const Home = () => {
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
  const optionsY = {
    initial: {
      Y: "-100%",
      opacity: 0,
    },
    whileInView: {
      Y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...optionsX}>TCS Burger Wala</motion.h1>
          <motion.p
            {...optionsX}
            transition={{
              delay: 0.3,
            }}
          >
            Give yourself a tasty burger.
          </motion.p>
        </div>
        <motion.a
          {...optionsY}
          transition={{
            delay: 0.3,
          }}
          href="#menu"
        >
          Explore Menu
        </motion.a>
      </section>
      <Founder />
      <Menu />
    </>
  );
};

export default Home;
