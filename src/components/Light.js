import { motion } from "framer-motion";

export const Light = ({ crdX, crdY, duration, value }) => {
  console.log("ssss===>>", crdX, crdY, duration);
  return (
    <div className={`relative mt-4 ml-48`}>
      <div
        className={`absolute w-[2px] h-[100px] bg-[#56bdcf] bottom-0 right-1`}
      >
        <p className="absolute text-[#72f2ff] top-[-30px] left-[-10px] font-bold text-[18px] tracking-[-0.1em]">
          <span className="font-normal">&#x25EF;&nbsp;&nbsp;</span>
          {value}
        </p>
      </div>
      <motion.div
        className={`bg-gradient-radial drop-shadow-[0_0_5px_#00fbfe] w-[12px] h-[8px] rounded-[50%]`}
        animate={{
          scale: [1, 1.5, 1],
          boxShadow: ["0 0 5px #00fbfe", "0 0 20px #00fbfe", "0 0 5px #00fbfe"],
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};
