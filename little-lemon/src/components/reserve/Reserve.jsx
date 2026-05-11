import AboutImage from "../landing/AboutImage";
import FormReserve from "./FormReserve";
import Image1 from "../../assets/about-img1.jpg";
import Image2 from "../../assets/reserve-img.jpg"

function Reserve() {
  return (
    <>
      <section className="container d-flex gap-5">
        <section>
          <h1>Find a table for any occasion</h1>
          <br />
          <FormReserve />
        </section>
        <section
          className="position-relative "
          style={{ width: "457px", height: "581px" }}
        >
          <AboutImage image1={Image1} image2={Image2} />
        </section>
      </section>
    </>
  );
}

export default Reserve;
