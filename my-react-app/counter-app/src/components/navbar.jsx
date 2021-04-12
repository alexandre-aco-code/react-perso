//src//components/navbar.jsx
import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          App Compteur React
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </a>
      </nav>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.total === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    const { total } = this.props;
    return total === 0 ? "Zero" : total;
  }
}


export default NavBar;