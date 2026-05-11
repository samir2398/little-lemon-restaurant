import FormLayout from "../layout/FormLayout";
import FormLogin from "./FormLogin";
import Image from '../../assets/hero.jpg'

function Login() {
    return (
        <>
        <section className="container">
        <h1>Sign in collect points</h1>
        <br></br>
        <FormLogin />
        </section>
        <br/>
        <img src={Image} style={{width:'100%', height:'185px', objectFit:'cover'}} />
        </>
    )
}

export default Login;