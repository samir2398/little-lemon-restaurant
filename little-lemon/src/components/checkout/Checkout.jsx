import AboutImage from "../landing/AboutImage";
import CheckoutForm from "./CheckoutForm";
import Image1 from '../../assets/checkout-img1.jpg'
import Image2 from '../../assets/checkout-img2.jpg'

function Checkout() {
    return(
        <>
        <section className="container" style={{paddingBottom:'200px'}}>
            <section className="d-flex">
        <CheckoutForm />
        <section className="position-relative">
            <AboutImage image1={Image2} image2={Image1} />
        </section>
            </section>
        </section>
        </>
    )
}

export default Checkout;