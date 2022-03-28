import React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Headroom from "react-headroom";

function Header() {
  return (
    <Headroom
      style={{
        webkitTransition: "all .10s ease-in-out",
        mozTransition: "all .10s ease-in-out",
        oTransition: "all .10s ease-in-out",
        transition: "all .1s ease-in-out",
        opacity: 50,
      }}
    >
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl hover:bg-base-100">
            Protection
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://top.gg/bot/750253000638857216/invite"
            target="_blank"
            class="btn"
          >
            Invite Now
          </a>
        </div>
      </div>
    </Headroom>
  );
}

export default Header;
