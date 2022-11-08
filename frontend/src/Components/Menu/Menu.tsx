import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/api/new">New Meeting</NavLink>
            
            <span> | </span>
            <NavLink to="/select">Select Team</NavLink>
        </div>
    );
}

export default Menu;
