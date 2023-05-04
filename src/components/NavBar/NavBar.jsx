import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h2>Craft Beer</h2>
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