import { motion } from "framer-motion";
import * as React from "react";
import { render } from "react-dom";
// import { Refresh } from "./Refresh";
import "./styles.css";

const App = () => {
  return (
    <>
      {/* <Refresh onClick={() => setCount(count + 1)} /> */}
      <div className="example-container">
        <motion.div
          animate={{
            scale: [1, 2, 1],
            boxShadow: ["0 0 0px white", "0 0 20px white", "0 0 0 white"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
    </>
  );
};

render(<App />, document.getElementById("root"));
