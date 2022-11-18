import { BrowserRouter as Router, Link } from "react-router-dom";

function MainNavbar() {
  return (
    <header className="w-screen">
      <nav className="w-full">
          <ul className="flex flex-row justify-between">
            <li>
              <Link to="/" exact>
                LOGO
              </Link>
            </li>
            <li>
              <Link to="/register" exact>
                <div>REGISTER</div>
              </Link>
            </li>
          </ul>
      </nav>
    </header >

  )
}

export default MainNavbar;