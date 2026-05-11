import Card from "./Card";
import DataProduct from "../../json/product.json";

function Specials() {
  const product = DataProduct;

  return (
    <>
    <section style={{margin:'50px'}}>
    <h1 style={{ color: "#495E57" }} className="fw-bold">Specials</h1>
    <br />
      <section className="d-flex justify-content-center gap-4">
        {product.map((data) => {
            const arrayDesc = data.desc.split(" ");
            const getDesc = arrayDesc.slice(0, 35)
            const desc = getDesc.join(" ")

          return <Card
            key={data.id}
            title={data.name}
            price={data.price}
            desc={desc}
            image={data.image}
          />;
        })}
      </section>
    </section>
    </>
  );
}

export default Specials;
