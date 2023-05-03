import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Craft Beer E-commerce</h3>
            <div>
                <button>IPA's</button>
                <button>Lagers</button>
                <button>Sours</button>
                <button>Darks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar