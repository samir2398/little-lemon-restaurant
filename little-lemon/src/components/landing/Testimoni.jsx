import CardTestimoni from "./CardTestimoni";
import TestimoniData from "../../json/testimoni.json";

function Testimoni() {
  const dataTestimoni = TestimoniData;

  return (
    <>
    <section className="d-flex justify-content-center align-items-center gap-3" style={{backgroundColor:'#495E57', height:"613px"}}>
    {dataTestimoni.map((data) => {
            const arrayTestimoni = data.testimoni.split(" ");
            const getTestimoni = arrayTestimoni.slice(0, 59)
            const testimoni = getTestimoni.join(" ")

        return (
          <CardTestimoni
          key={data.id}
            name={data.name}
            title={data.title}
            testimoni={testimoni}
            image={data.image}
          />
        );
      })}
    </section>
    </>
  );
}

export default Testimoni;
