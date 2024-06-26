import { NavLink } from "react-router-dom";
import AuthStatus from "./security/AuthStatus";
import { useAuth } from "./security/AuthProvider";

export default function NavHeader() {
    const auth = useAuth();

    // <a> reloader siden, <Link> gør ikke, navlink er en <Link> med ekstra features der gør det nemmere at style
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink> 
                    {/* <NavLink to="/">Home</NavLink> */}
                </li>
                <li>
                    <NavLink to="/categories">Categories</NavLink>
                    {/* <NavLink to="/categories">Categories</NavLink> */}
                </li>
                <li>
                    <NavLink to="/recipes">Recipes</NavLink>
                    {/* <NavLink to="/recipes">Recipes</NavLink> */}
                </li>
                {auth.isLoggedIn() && (
                    <li>
                        <NavLink to="/add">Add</NavLink>
                        {/* <Link to="/add">Add</Link> */}
                    </li>
                )}
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                    {/* <NavLink to="/">Home</NavLink> */}
                </li>
                <AuthStatus />
            </ul>
        </nav>
    );
}
