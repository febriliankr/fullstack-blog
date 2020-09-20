import React from "react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];

function Navigation() {
  return (
    <nav className="site-navigation">
      <span>Fullstack react blog</span>
      <ul>
        {navLinks.map((link, index) => {
          return <li key={index}>{link.title}</li>;
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
