import FooterMenu from "./FooterMenu";
import Logo from "../../assets/little-lemon-logo.jpg"

function Footer() {
    return (
        <>
        <section className="d-flex justify-content-center align-items-center p-5" style={{gap:"119px", borderTop:'0.5px solid #F4CE14'}}>
        <img src={Logo} style={{width:'226px', height:'44px', objectFit:'contain'}} />
        <FooterMenu />
        </section>
        </>
    )
}

export default Footer;