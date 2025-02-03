import Header from "./ui/Header";
import Banner from "./ui/home/Banner";
import About from "./ui/home/About";
import Projects from "./ui/home/Projects"
import Experiance from "./ui/home/Experiance"
import Contact from "@/app/ui/home/Contact"
import Footer from "@/app/ui/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <About />
      <Experiance />
      <Contact />
      <Footer />
    </>
  );
}
