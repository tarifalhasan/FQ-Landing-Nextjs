import About from "@/components/landing/About";
import Blogs from "@/components/landing/Blogs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Reasons from "@/components/landing/Reason";
import StartInvesting from "@/components/landing/StartInvesting";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StartInvesting />
      <About />
      <Reasons />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
}
