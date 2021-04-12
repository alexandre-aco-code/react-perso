//src//components/navbar.jsx
import { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        App Compteur React
          <span className={getBadgeClasses(props.total)}>{formatCount()}</span>
      </a>
    </nav>
  );
}

const getBadgeClasses = (total) => {
  let classes = "badge m-2 badge-";
  classes += total === 0 ? "warning" : "success";
  return classes;
}

const formatCount = (total) => {
  return total === 0 ? "Zero" : total;
}


export default NavBar;