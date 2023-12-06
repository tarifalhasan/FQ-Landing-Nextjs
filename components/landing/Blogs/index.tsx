import Container from "@/components/Container";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section className=" w-full relative  py-16 bg-bottom bg-no-repeat  bg-cover">
      <Container>
        <div className=" gap-10 grid sm:grid-cols-2 lg:grid-cols-3 ">
          <div
            style={{
              backgroundImage: `url('/unsplash_8iIUDnRq87o.png')`,
            }}
            className=" h-[307px]  rounded-[15px] relative m-0 p-0 bg-no-repeat bg-cover"
          ></div>
          <BlogCard
            title="Que son las criptomonedas? Todo lo que necesitas saber"
            category="CRYPTO BASIC"
            features_image="/Thumbnail.png"
          />
          <BlogCard
            title="Que son las criptomonedas? Todo lo que necesitas saber"
            category="CRYPTO BASIC"
            features_image="/blog2.png"
          />
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
