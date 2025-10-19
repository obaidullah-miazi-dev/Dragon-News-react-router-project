import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            {/* Spinner */}
            <motion.div
                className="w-16 h-16 border-4 rounded-full"
                style={{
                    borderTopColor: "#d72050",
                    borderRightColor: "#ffe4ec",
                    borderBottomColor: "#d72050",
                    borderLeftColor: "#ffe4ec",
                }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1,
                }}
            ></motion.div>

            {/* Fancy Text */}
            <motion.h2
                className="mt-6 text-xl font-semibold tracking-widest text-[#d72050]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}
            >
                Loading...
            </motion.h2>
        </div>
    );
}
