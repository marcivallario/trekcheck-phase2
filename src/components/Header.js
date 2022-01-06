import logo from "../assests/logo.png"
import { Route, NavLink } from "react-router-dom";

function Header() {
    const linkStyles = {
        display: "inline-block",
        margin: "0 10px",
        textDecoration: "none",
        color: "#5f666e"
    };

    return (
        <nav>
            <Route render={({ history }) => (
                <img src={logo} alt="Trek Check" title="Trek Check" onClick={() => { history.push('/') }}/>
            )} />
            <div id="nav-container">
                <div id="navlink">
                    <NavLink
                        to="/"
                        exact
                        style={linkStyles}
                        activeStyle={{
                            textDecoration: "underline",
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/itineraries"
                        exact
                        style={linkStyles}
                        activeStyle={{
                            textDecoration: "underline",
                        }}
                    >
                        Itineraries
                    </NavLink>
                    <NavLink
                        to="/add"
                        exact
                        style={linkStyles}
                        activeStyle={{
                            textDecoration: "underline",
                        }}
                    >
                        Add
                    </NavLink>
                </div>
                <p> Welcome, Marci.</p>
            </div>
        </nav>
    )
}

export default Header;