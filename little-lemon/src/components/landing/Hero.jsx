import Button from "./Button";
import MapLogo from "../../assets/map-pin.svg";
import HeroBackground from "../../assets/hero.jpg";
import { useNavigate } from "react-router";

function Hero() {

  const navigate = useNavigate();

  return (
    <section
      className="text-center text-white"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${HeroBackground})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'662px',
        paddingTop:'292px'
      }}
    >
      <h1 className="fw-bold" style={{ color: "#F4CE14" }}>
        Little Lemon
      </h1>
      <section className="d-flex justify-content-center">
        <img src={MapLogo} />
        <p className="m-2 ">Chicago</p>
      </section>
      <section className="d-flex justify-content-center">
        <p className="text-center" style={{ width: "700px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </section>
      <section className="d-flex justify-content-center">
        <Button name="Reserve Table" event={(e) => {
          e.preventDefault()
          navigate('/form/reserve')
        }}/>
      </section>
    </section>
  );
}

export default Hero;
