function CardTestimoni({ testimoni, name, title, image }) {
  return (
    <>
      <section
        style={{
          width: "300px",
          height: "253px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "38px",
        }}
        className="rounded bg-white"
      >
        <p style={{ fontSize: "10px" , borderBottom:'#F4CE14 solid 0.5px', paddingBottom:'20px'}}>{testimoni}</p>
        <section className="d-flex gap-3 align-items-center">
          <img
            src={image}
            style={{ width: "40px", height: "40px", objectFit:'cover' }}
            className="rounded-circle"
          />
          <section>
            <p className="m-0">{name}</p>
            <p className="m-0" style={{color:'#F4CE14'}}>{title}</p>
          </section>
        </section>
      </section>
    </>
  );
}

export default CardTestimoni;
