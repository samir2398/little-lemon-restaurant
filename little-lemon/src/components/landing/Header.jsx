import Nav from "./Nav";

function Header() {
    return (
        <>
        <nav className="d-flex justify-content-center mt-3 position-absolute" style={{width:'100%'}}>
            <Nav />
        </nav>
        </>
    )
}

export default Header;