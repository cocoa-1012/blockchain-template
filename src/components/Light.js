// import react from "react";
import { motion } from "framer-motion";

export const Light = ({ crdX, crdY, duration }) => {
  console.log("ssss===>>", crdX, crdY, duration);
  return (
    <div className={`relative mt-4 ml-48`}>
      <div
        className={`absolute w-[2px] h-[100px] bg-[#56bdcf] bottom-0 right-2`}
      ></div>
      <motion.div
        className={`bg-gradient-radial drop-shadow-[0_0_0_rgba(44,253,254,1)] w-[20px] h-[16px] rounded-[50%]`}
        animate={{
          scale: [1, 1.5, 1],
          boxShadow: ["0 0 10px white", "0 0 20px white", "0 0 10px white"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>

    // <div className="w-[80px] h-[80px] bg-red-400">
    //   <div className="bg-gradient-radial shadow-white w-[20px] h-[20px] rounded-[30px]">
    //     <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
    //   </div>
    // </div>
  );
};
