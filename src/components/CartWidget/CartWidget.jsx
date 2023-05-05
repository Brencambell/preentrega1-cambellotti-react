// import 'bootstrap/dist/css/bootstrap.min.css';
import { BiCart } from 'react-icons/bi';

const CartWidget = () => {
    return (
        <div className="bg-dark m-auto">
            <BiCart className="bi bi-cart" />
            0
         </div>
    )
}

export default CartWidget