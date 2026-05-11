import { useState } from "react";
import Button from "../landing/Button";
import { useNavigate } from "react-router";

function FormReserve() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberDinners, setNumberDinners] = useState(0);
  const [occasion, setOccassion] = useState("");
  const [seating, setSeating] = useState("outside");

  const navigate = useNavigate()

  function options() {
    for (let index = 0; index < 25; index++) {
      return <options value={index}>{index}</options>;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

      const data = {"date": date,
        "time": time,
        "number_dinners": numberDinners,
        "occasion": occasion,
        "seating": seating
      }

      await fetch('http://localhost:3000/reserve', {
        method: "POST",
        headers: {
          "Content-Type": "applicaation/json",
          Accept: "application/json"
        }, body: JSON.stringify(data)
      }).then(() => {
        alert("Reserve Success")
        console.log("Reserve Success")
      })

      navigate("/form/checkout")

  }

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <section className="d-flex gap-2">
          {/* left */}
          <section
            className="d-flex flex-column gap-2"
            style={{ width: "320px" }}
          >
            <section className="d-flex flex-column">
              <label htmlFor="date" style={{ fontSize: "25px" }}>
                Date
              </label>
              <input
                required
                type="date"
                id="date"
                onChange={(e) => setDate(e.target.value)}
                style={{ border: "solid #F4CE14 0.5px" }}
                className="form-control rounded-1"
              />
            </section>
            <section className="d-flex flex-column">
              <label htmlFor="numberofdinners" style={{ fontSize: "25px" }}>
                Number of Dinners
              </label>
              <select
                id="numberofdinners"
                className="form-select"
                style={{ border: "solid #F4CE14 0.5px" }}
                onChange={(e) => setNumberDinners(e.target.value)}
              >
                {Array.from({ length: 25 }, (_, index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
              </select>
            </section>
            <section>
              <label htmlFor="seating" style={{ fontSize: "25px" }}>
                Seating Options
              </label>
              <br />
              <br />
              <section className="d-flex gap-5">
                <section className="form-check">
                  <input
                    className="form-check-input"
                    name="seating"
                    type="radio"
                    id="standard"
                    value="standard"
                    checked
                    onChange={(e) => setSeating(e.target.value)}
                    style={{ border: "2px solid #F4CE14" }}
                  />
                  <label className="form-check-label" htmlFor="standard">
                    Standard
                  </label>
                </section>
                <section className="form-check">
                  <input
                    className="form-check-input"
                    name="seating"
                    type="radio"
                    id="outside"
                    value="outside"
                    onChange={(e) => setSeating(e.target.value)}
                    checked
                    style={{ border: "2px solid #F4CE14" }}
                  />
                  <label className="form-check-label" htmlFor="standard">
                    Outside
                  </label>
                </section>
              </section>
            </section>
          </section>
          {/* left end */}

          {/* right */}
          <section
            className="d-flex flex-column gap-2"
            style={{ width: "320px" }}
          >
            <section className="d-flex flex-column">
              <label htmlFor="time" style={{ fontSize: "25px" }}>
                Time
              </label>
              <input
                required
                type="time"
                id="time"
                onChange={(e) => setTime(e.target.value)}
                style={{ border: "solid #F4CE14 0.5px" }}
                className="form-control rounded-1"
              />
            </section>
            <section className="d-flex flex-column">
              <label htmlFor="occasion" style={{ fontSize: "25px" }}>
                Occasion
              </label>
              <input
                placeholder="Occasion"
                type="text"
                id="occasion"
                onChange={(e) => setOccassion(e.target.value)}
                style={{ border: "solid #F4CE14 0.5px" }}
                className="form-control rounded-1"
              />
            </section>
          </section>
          {/* right end */}
        </section>
        <br />
        <Button type="submit" name="Lets Go" />
      </form>
    </>
  );
}

export default FormReserve;
