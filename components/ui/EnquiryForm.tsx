"use client";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  return (
    <motion.div className="bg-white/10 backdrop-blur p-6 rounded-xl">
      <input className="w-full mb-3 p-2 bg-black/20" placeholder="Name" />
      <input className="w-full mb-3 p-2 bg-black/20" placeholder="Phone" />
      <button className="w-full bg-[#C9A227] py-2">
        Submit
      </button>
    </motion.div>
  );
}
