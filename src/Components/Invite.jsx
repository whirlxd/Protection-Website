import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Invite() {
  return (
    <div className="hero custom-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <h1 className="text-5xl font-bold">Not Convinced?</h1>

          <br></br>
          <br></br>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <a
                href="https://top.gg/bot/750253000638857216"
                target="_blank"
                className="btn"
              >
                Reviews & Ratings
              </a>
            </div>
          </div>

          <div className="divider lg:divider-horizontal mx-auto"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <a
                href="https://discord.gg/JsbzZ87eHP"
                target="_blank"
                className="btn"
              >
                Get Support
              </a>
            </div>
          </div>
          <div className="divider lg:divider-horizontal mx-auto"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <a
                href="https://canary.discord.com/channels/922006609713066036/938986972704288788"
                className="btn"
                target="_blank"
              >
                Try Yourself
              </a>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default Invite;
