import Hero from "../components/home/Hero";
import FeaturedProduct from "../components/home/FeaturedProduct";
import Categories from "../components/home/Categories";
import Reviews from "../components/home/Reviews";
import Newsletter from "../components/home/Newsletter";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <FeaturedProduct />
      <Categories />
      <Reviews />
      <Newsletter />
    </motion.div>
  );
}
