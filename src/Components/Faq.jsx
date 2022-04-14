import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Faq() {
  return (
    <div className="bg-base-200">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold  mt-10">FAQ's</h1>

            <p className="py-6 mb-5">
              Some frequently asked questions about the bot and it's job
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full  justify-center lg:flex-row ">
        <FaqCard
          question="How to setup the bot?"
          answer="Invite & Whitelist Users"
        />

        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FaqCard question="Will it nuke my server" answer="No, it won't" />
      </div>

      <br></br>
      <div className="flex flex-col w-full  justify-center lg:flex-row ">
        <FaqCard
          question="Does it store my data?"
          answer="only server & user ids"
        />

        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FaqCard
          question="Someone said it's bad"
          answer="NonSense! Must be some hater"
        />
      </div>
      <br></br>

      <br></br>
      <br></br>

      <a
        href="https://discord.com/channels/922006609713066036/938986969063628862"
        target="_blank"
        className="btn btn-primary btn-wide flex flex-col  mx-auto justify-center"
      >
        View More
      </a>

      <br></br>

      <br></br>
    </div>
  );
}

function FaqCard(props) {
  return (
    <div className="mockup-code overflow-x-hidden    mr-3 ml-3">
      <pre data-prefix="Q:" className="text-warning">
        <code>{props.question}</code>
      </pre>
      <pre data-prefix="A:" className="text-success">
        <code>{props.answer}</code>
      </pre>
    </div>
  );
}

export default Faq;
