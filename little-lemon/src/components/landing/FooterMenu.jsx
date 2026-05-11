function FooterMenu() {
  return (
    <>
      <section className="d-flex gap-5">
        <nav>
          <h5 style={{ color: "#495E57" , fontWeight:'bold'}}>Navigation</h5>
          <ul
            style={{ listStyleType: "none", paddingLeft: "0px" }}
            className="d-flex flex-column gap-2"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Reservations</a>
            </li>
            <li>
              <a>Order Online</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h5 style={{ color: "#495E57" , fontWeight:'bold'}}>Contact</h5>
          <ul
            style={{ listStyleType: "none", paddingLeft: "0px" }}
            className="d-flex flex-column gap-2"
          >
            <li>
              <a>Address</a>
            </li>
            <li>
              <a>Phone Number</a>
            </li>
            <li>
              <a>Email</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h5 style={{ color: "#495E57" , fontWeight:'bold'}}>Social Media</h5>
          <ul
            style={{ listStyleType: "none", paddingLeft: "0px" }}
            className="d-flex flex-column gap-2"
          >
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>facebook</a>
            </li>
            <li>
              <a>Tiktok</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default FooterMenu;
