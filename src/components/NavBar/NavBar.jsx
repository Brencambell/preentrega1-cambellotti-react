import CartWidget from "../CartWidget/CartWidget"

// const NavBar = () => {
//     return (
//         <nav>
//             <h2>Craft Beer</h2>
//             <div>
//                 <button>IPA's</button>
//                 <button>Lagers</button>
//                 <button>Sours</button>
//                 <button>Darks</button>
//             </div>
//             <CartWidget />
//         </nav>
//     )
// }

// export default NavBar

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Craft Beer E-Commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">IPA's</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Lagers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sours</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Darks</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;


// const Navbar = () => {
//   return (
//     <Navbar bg=“light” expand=“lg”>
// 	<Container>
// 		<Navbar.Brand href=“#home”>Craft Beer</Navbar.Brand>
// 		<Navbar.Toogle aria-controls=“basic-nacbar-nav” />
// 		<Navbar.Collapse id=“basic-navbar-nav”>
// 			<Nav className=“ms-auto”>
// 				<Nav.Link href=“#home”>Home</Nav.Link>
// 				<Nav.Link href=“#ipas”>IPA’s<”/Nav.Link>
// 				<Nav.Link href=“#lagers”>Lagers</Nav.Link>
// 				<Nav.Link href=“#darks”>Darks</Nav.Link>
// 			</Nav>
// 		</Navbar.Collapse>
// 	</Container>
// </Nabvar>
//   )
// }

// export default Navbar