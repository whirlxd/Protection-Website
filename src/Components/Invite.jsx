import React from "react";

function Invite() {
  return (
    <div class="hero custom-h-screen bg-base-200">
      <div class="hero-content flex-col ">
        <h1 class="text-5xl font-bold">Still Not Sure?</h1>

        <br></br>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <button class="btn">Reviews & Ratings</button>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <button class="btn">Get Support</button>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div class="card-body">
            <button class="btn">View Commands</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invite;
