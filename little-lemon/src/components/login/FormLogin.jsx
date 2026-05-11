import Button from "../landing/Button";

function FormLogin() {
  return (
    <>
      <form>
        <section className="d-flex" style={{gap:'133px'}}>
            {/* left */}
        <section className="d-flex flex-column gap-2" style={{width:'450px'}}>
          <section className="d-flex flex-column">
            <label for="firstname" style={{ fontSize: "25px" }}>
              First Name
            </label>
            <input
              placeholder="First Name"
              required
              type="text"
              id="firstname"
              name="firstname"
              style={{ border: "solid #F4CE14 0.5px" }}
              className="form-control rounded-1"
            />
            <p className="m-0" style={{fontSize:'10px'}}>First name is required</p>
          </section>
          <section className="d-flex flex-column">
            <label for="lastname" style={{ fontSize: "25px" }}>
              Last Name
            </label>
            <input
              placeholder="Last Name"
              required
              type="text"
              id="lastname"
              name="lastname"
              style={{ border: "solid #F4CE14 0.5px" }}
              className="form-control rounded-1"
            />
            <p className="m-0" style={{fontSize:'10px'}}>Last name is required</p>
          </section>
          <section className="d-flex flex-column">
            <label for="phonenumber" style={{ fontSize: "25px" }}>
              Phone Number
            </label>
            <input
              placeholder="+62 (123456789) "
              required
              type="text"
              id="phonenumber"
              name='phonenumber'
              style={{ border: "solid #F4CE14 0.5px" }}
              className="form-control rounded-1"
            />
            <p className="m-0" style={{fontSize:'10px'}}>Phone Number is required</p>
          </section>
        </section>
        {/* left end */}

        {/* right */}
        <section className="d-flex flex-column gap-2" style={{width:'450px'}}>
          <section className="d-flex flex-column">
            <label for="email" style={{ fontSize: "25px" }}>
              Email
            </label>
            <input
              placeholder="Email"
              required
              type="email"
              id="email"
              name='email'
              style={{ border: "solid #F4CE14 0.5px" }}
              className="form-control rounded-1"
            />
             <p className="m-0" style={{fontSize:'10px'}}>Email is required</p>
          </section>
          <section className="d-flex flex-column">
            <label for="password" style={{ fontSize: "25px" }}>
                Password
            </label>
            <input
              placeholder="Password"
              required
              type="password"
              id="password"
              name="password"
              min="6"
              style={{ border: "solid #F4CE14 0.5px" }}
              className="form-control rounded-1"
            />
             <p className="m-0" style={{fontSize:'10px'}}>6-character password is all you need</p>
          </section>
          <section>
            <textarea placeholder="Add a special request (opsional)"
              id="textarea"
              name="textarea"
              style={{ border: "solid #F4CE14 0.5px", height:'76px' }}
              className="form-control rounded-1">

            </textarea>
          </section>
        </section>
        {/* right end */}
        </section>
        <br/>
        <Button name="continue" />
      </form>
    </>
  );
}

export default FormLogin;
