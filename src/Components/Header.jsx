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
            <label class="btn btn-ghost lg:hidden">
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
                <a>nOU</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a href="/no">Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#features">pog</a>
              </li>
            </ul>
          </div>
          <a href="/" class="btn btn-ghost normal-case text-xl">
            Protection
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <a href="#features">Features</a>
            </li>
            <li tabindex="0">
              <a href="https://discord.gg/JsbzZ87eHP" target="_blank">
                Support
              </a>
              <ul class="p-2"></ul>
            </li>
            <li tabindex="0">
              <a href="#know-more">More</a>
              <ul class="p-2"></ul>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://top.gg/bot/754519886436237463/invite"
            target="_blank"
            class="btn hover:bg-secondary"
          >
            Invite Now
          </a>
        </div>
      </div>
    </Headroom>
  );
}

export default Header;
