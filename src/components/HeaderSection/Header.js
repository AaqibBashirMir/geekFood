import Button from "../ButtonSection/Button"
import './Header.css'
function Header() {
    const reloadHome = () => {
        window.location.reload();
    }
    // let menuList=["Home","Quote","Resturants","Foods","Contact"]
    return (
        <nav id="Header">
            <div id="left-heading">
                <img src="https://flowbite.com/docs/images/logo.svg" onClick={reloadHome}></img>
                <h2>GeekFoods</h2>
            </div>
            <div id="list">
                <li style={{
                    color: "blue"
                }} onClick={reloadHome}>Home</li>
                <li className="inner-list">Quote</li>
                <li className="inner-list">Resturants</li>
                <li className="inner-list">Foods</li>
                <li className="inner-list">Contact</li>
            </div>
            <Button id="getStarted" buttonText="Get Started" />
          
        </nav>
    )
}

export default Header