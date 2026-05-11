import ShoppingBag from "../../assets/shopping-bag.svg";

function Card({ title, price, desc, image }) {
  return (
    <>
      <section
        style={{ backgroundColor: "#F4CE14", width: "333px", height: "379px", overflow:'hidden'}}
        className="card"
      >
        <img className="card-img-top" src={image} style={{ width: "333px", height: "207px", objectFit:'cover' }} />
        <section className="card-body" style={{padding:'19px'}}>
          <section className="d-flex justify-content-between">
            <p className="fw-bold card-title">{title}</p>
            <p className="fw-bold">${price}</p>
          </section>
          <p className="card-text" style={{fontSize:'10px'}}>{desc}</p>
          <section className="d-flex justify-content-between">
            <p className="fw-bold">Order or Delivery</p>
            <img src={ShoppingBag} />
          </section>
        </section>
      </section>
    </>
  );
}

export default Card;
