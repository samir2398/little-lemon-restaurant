import { Outlet } from "react-router";
import MapLogo from "../../assets/map-pin-black.svg";

function FormLayout() {
  return (
    <>
      <section className="container mt-5">
        <section className="mb-5">
          <h1 className="fw-bold" style={{ color: "#F4CE14" }}>
            Little Lemon
          </h1>
          <section className="d-flex">
            <img src={MapLogo} />
            <p className="m-2 ">Chicago</p>
          </section>
        </section>
      </section>
        <Outlet />
    </>
  );
}

export default FormLayout;
