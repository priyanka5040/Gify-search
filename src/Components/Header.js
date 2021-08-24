import "../styles/headerStyle.css";
import {Link} from "react-router-dom";

function Header(){
    return <div className="header">
        <Link to = "/"><h1>Search Gifs</h1></Link>
        <Link to = "/favorite"><h1>Favorite GIFs</h1></Link>
    </div>
    
}
export default Header;