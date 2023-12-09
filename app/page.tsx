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
    <main className=" relative overflow-hidden">
      <Header />
      <Hero />
      <StartInvesting />
      <About />
      <Reasons />
      <Contact />
      <Blogs />
      <Footer />
      <div className=" lg:block hidden absolute w-[300px] h-[300px]   bg-[#1D70B7] blur-[150px] rounded-full -right-[120px] opacity-50 top-[17%] z-[99999999]" />
      <div className=" w-[400px] h-[350px]   bg-skin-secondary blur-[150px] rounded-full hidden lg:block absolute   -top-[110px] -left-[180px] opacity-25 z-[99999999]" />
      <div className=" w-[250px] h-[350px]   bg-[#1D70B7] blur-[140px] rounded-full hidden lg:block absolute   top-[25%] -left-[180px] opacity-50  z-[99999999]" />
      <div className=" lg:block hidden absolute w-[300px] h-[300px]   bg-[#4FE0B6] blur-[150px] rounded-full -right-[120px] opacity-50 top-[57%] z-[99999999]" />
    </main>
  );
}
