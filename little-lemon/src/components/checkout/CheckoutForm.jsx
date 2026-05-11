import { useEffect, useState } from "react";
import Button from "../landing/Button";
import { useEffectOnce } from "react-use";

function CheckoutForm() {
  const [dataRes, setDataRes] = useState([]);
  const [bookingDetails, setBookingDetails] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')
  const [expDate, setExpDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [confirmation, setConfirmation] = useState('text')

  async function dataReserve() {
    const fetchData = await fetch("http://localhost:3000/reserve", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const fetchDataRes = await fetchData.json();
    console.log(fetchDataRes);
    setDataRes(fetchDataRes);
  }

  async function handleSubmit(e) {
      e.preventDefault()

      const data = {
        "booking_details": bookingDetails,
        "card_number" : cardNumber,
        "name" : name,
        "exp_date" : expDate,
        "cvv" : cvv
      }

      await fetch('http://localhost:3000/checkout', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      }).then(() => {
        alert("checkout success")
        console.log("checkout success")
      })
  }

  useEffectOnce(() => {
    dataReserve();
  });

  return (
    <>
      <section style={{ width: "680px" }}>
        <section>
          <h1>Booking Details</h1>
          <select
          required
          onChange={(e) => setBookingDetails(e.target.value)}
            className="form-select"
            style={{ border: "solid #F4CE14 0.5px", width: "260px" }}
          >
            <option selected>select your reserve</option>
            {dataRes.map((post) => {
              return (
                <option
                  key={post.id}
                  value={`${post.date}-${post.time}-${post.number_dinners}`}
                >{`${post.date}-${post.time}-${post.number_dinners}`}</option>
              );
            })}
          </select>
        </section>
        <br />
        <h1>Credit Card Details</h1>
        <br />
        <form method="POST" onSubmit={handleSubmit}>
          <section className="d-flex gap-4">
            {/* left */}
            <section>
              <section className="d-flex flex-column">
                <label htmlFor="cardnumber" style={{ fontSize: "25px" }}>
                  Card Number
                </label>
                <input
                  required
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Card Number"
                  type="text"
                  min="12"
                  max="12"
                  id="cardnumber"
                  style={{ border: "solid #F4CE14 0.5px" }}
                  className="form-control rounded-1"
                />
                <p className="m-0" style={{ fontSize: "10px" }}>
                  Card Number is required
                </p>
              </section>
              <section className="d-flex flex-column">
                <label htmlFor="firstname" style={{ fontSize: "25px" }}>
                  First Name / Last Name
                </label>
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name / Last Name"
                  type="text"
                  id="firstname"
                  style={{ border: "solid #F4CE14 0.5px" }}
                  className="form-control rounded-1"
                />
                <p className="m-0" style={{ fontSize: "10px" }}>
                  Name is required
                </p>
              </section>
            </section>

            {/* right */}
            <section className="d-flex flex-column gap-3">
              <section style={{ width: "113px" }}>
                <label htmlhtmlFor="cvv" style={{ fontSize: "25px" }}>
                  CVV
                </label>
                <input
                  required
                  onChange={(e) => setCvv(e.target.value)}
                  type="text"
                  id="cvv"
                  style={{ border: "solid #F4CE14 0.5px" }}
                  className="form-control rounded-1"
                />
              </section>
              <section style={{ width: "113px" }}>
                <label htmlFor="expdate" style={{ fontSize: "25px" }}>
                  Exp Date
                </label>
                <input
                  required
                  onChange={(e) => setExpDate(e.target.value)}
                  placeholder="MM/YY"
                  type="text"
                  id="expdate"
                  style={{ border: "solid #F4CE14 0.5px" }}
                  className="form-control rounded-1"
                />
              </section>
            </section>
          </section>
          <br />
          <section className="d-flex flex-column gap-2">
            <section className="d-flex gap-2 align-items-center">
              <input
                className="from-check-input"
                type="radio"
                onChange={(e) => setConfirmation(e.target.value)}
                name="confirmation"
                value="message"
                id="confirmation1"
                checked
                style={{ border: "2px solid #F4CE14" }}
              />
              <label htmlFor="confirmation1" className="form-check-label">
                Send me booking confirmation via message
              </label>
            </section>
            <section className="d-flex gap-2 align-items-center">
              <input
                className="from-check-input"
                onChange={(e) => setConfirmation(e.target.value)}
                type="radio"
                name="confirmation"
                value="email"
                id="confirmation2"
                checked
                style={{ border: "2px solid #F4CE14" }}
              />
              <label htmlFor="confirmation2" className="form-check-label">
                Send me booking confirmation via email
              </label>
            </section>
          </section>
          <br />
          <section>
            <Button type="submit" name="Book" />
          </section>
        </form>
      </section>
    </>
  );
}

export default CheckoutForm;
