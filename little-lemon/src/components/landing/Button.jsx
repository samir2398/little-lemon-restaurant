import { useState } from "react";

function Button({ name , event, type}) {
  const [button, setButton] = useState(false);

  return (
    <>
      <section onClick={event} style={{width:'fit-content'}}
        onMouseEnter={() => {
          setButton(true);
        }}
        onMouseLeave={() => {
          setButton(false);
        }}
      >
        {button ? (
          <button
          type={type}
            className="btn btn-lg"
            style={{ backgroundColor: "#495E57", color: "#F4CE14", width:'207px', height:'71px' }}
          >
            {name}
          </button>
        ) : (
          <button
          type={type}
            className="btn btn-lg"
            style={{ backgroundColor: "#F4CE14", color: "#495E57", width:'207px', height:'71px' }}
          >
            {name}
          </button>
        )}
      </section>
    </>
  );
}

export default Button;
