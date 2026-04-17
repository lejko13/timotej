"use client";

import { motion } from "framer-motion";
// import Kruzok from "../kruzok/kruzok";

type Props = {
  onClick?: () => void;
  zvacseny?: boolean;
  texthore?: string;
  odpoved?: string;
  podmienka: boolean;
  otazka: string;
  odpvene: string;
};

const Hybemkomponent = ({
  onClick,
  zvacseny,
  texthore,
  odpoved,
  podmienka,
  otazka,
  odpvene,
}: Props) => {
  return (
    <motion.div
      initial={{ height: "70px" }}
      animate={{
        minHeight: "70px",
        height: "fit-content",
      }}
      onClick={onClick}
      className="w-full h-full bg-white pl-6 pr-6 rounded-velky cursor-pointer overflow-hidden"
    >
      <motion.div
        initial={{ height: "70px" }}
        className="w-full h-full flex pt-6 pb-6 items-center"
      >
        <span className="w-full h-fit md:text-[17px]">
          {otazka}
        </span>

        <div className="w-fit h-full">

          {/* <Kruzok
            podmienka={podmienka}
            prisposobujem="w-[20px] h-[20px] bg-blackCustom text-[13px] border-none"
          /> */}
        </div>
      </motion.div>

      <motion.div
        initial={{ height: "0px" }}
        animate={{
          height: podmienka ? "fit-content" : "0px",
        }}
        transition={{ duration: 0.3 }}
        className="leading-snug overflow-hidden"
      >
        <span className="text-[13px] pb-4 flex text-sivaTmava md:text-[15px]">
          {odpvene}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Hybemkomponent;