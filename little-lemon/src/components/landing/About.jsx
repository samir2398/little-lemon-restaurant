import AboutImage from "./AboutImage";
import Image1 from "../../assets/about-img1.jpg";
import Image2 from "../../assets/about-img2.jpg";

function About() {
  return (
    <>
      <article
        className="d-flex justify-content-center align-items-center gap-5"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <p style={{ width: "560px" }} >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <section className=" position-relative" style={{width:'457px', height:'581px'}}>
          <AboutImage image1={Image1} image2={Image2} />
        </section>
      </article>
    </>
  );
}

export default About;
