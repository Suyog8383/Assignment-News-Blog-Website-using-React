import React, { useState } from "react";
import Card from "./Card";

function Header() {
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("sport");
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <i>Express News</i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCountry("in")}
                >
                  India <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCountry("us")}
                >
                  USA <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("business")}
                >
                  Business <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setCategory("sport")}
                >
                  Sport <span className="sr-only">(current)</span>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <Card country={country} category={category} />
    </>
  );
}

export default Header;
