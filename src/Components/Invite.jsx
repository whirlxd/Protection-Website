import React from "react";

function Invite() {
  return (
    <div class="hero custom-h-screen bg-base-200">
      <div class="hero-content flex-col ">
        <h1 class="text-5xl font-bold">Not Convinced?</h1>

        <br></br>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <a
              href="https://top.gg/bot/750253000638857216"
              target="_blank"
              class="btn"
            >
              Reviews & Ratings
            </a>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <a href="https://discord.gg/JsbzZ87eHP" target="_blank" class="btn">
              Get Support
            </a>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <a
              href="https://canary.discord.com/channels/922006609713066036/938986972704288788"
              class="btn"
              target="_blank"
            >
              Try Yourself
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
