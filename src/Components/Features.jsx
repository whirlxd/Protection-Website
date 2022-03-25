import React from "react";

function Features() {
  return (
    <>
      <div class="hero  bg-base-100 ">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold mb-20 mt-10">Features</h1>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full lg:flex-row">
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-primary">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Anti-Vanity</h2>
            <p>W.I.P</p>
            <div class="card-actions"></div>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-primary">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Whitelisting & BlackListing</h2>
            <p>W.I.P</p>
            <div class="card-actions"></div>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-primary">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Anti-Alt</h2>
            <p>W.I.P</p>
            <div class="card-actions"></div>
          </div>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-primary">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Anti-Noobs</h2>
            <p>W.I.P</p>
            <div class="card-actions"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
