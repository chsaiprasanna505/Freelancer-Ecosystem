import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import FeaturedJobs from "../components/FeaturedJobs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <Features />
  <Stats />
  <Categories />
  <FeaturedJobs />
  <Testimonials />
  <HowItWorks />
  <Footer />
</>
  );
}

export default Home;