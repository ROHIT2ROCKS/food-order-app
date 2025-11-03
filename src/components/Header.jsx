import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'


export default function Header() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
        return totalNumberofItems + item.quantity
    }, 0);

    function handelShowCart() {
        userProgressCtx.showCart()
    }

    return <header id="main-header">    
        <div id="title">
            <img src={logoImg} alt="a logo" />
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly={true} onClick={handelShowCart} >Cart({totalCartItems})</Button>
        </nav>
    </header>
}
