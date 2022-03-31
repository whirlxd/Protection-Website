import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Faq() {
  return (
    <div className="bg-base-200">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <h1 className="text-5xl font-bold  mt-10">FAQ's</h1>

              <p className="py-6 mb-5">
                Some frequently asked questions about the bot and it's job
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full  justify-center lg:flex-row ">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <FaqCard
            question="How to setup the bot?"
            answer="Invite & Whitelist Users"
          />
        </AnimationOnScroll>

        <div className="divider lg:divider-horizontal mx-auto"></div>
        <AnimationOnScroll animateIn="animate__slideInRight">
          <FaqCard question="Will it nuke my server" answer="No, it won't" />
        </AnimationOnScroll>
      </div>

      <br></br>
      <div className="flex flex-col w-full  justify-center lg:flex-row ">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <FaqCard
            question="Does it store my data?"
            answer="only server & user ids"
          />
        </AnimationOnScroll>

        <div className="divider lg:divider-horizontal mx-auto"></div>
        <AnimationOnScroll animateIn="animate__slideInRight">
          <FaqCard
            question="Someone said it's bad"
            answer="NonSense! Must be some hater"
          />
        </AnimationOnScroll>
      </div>
      <br></br>
      <div className="flex flex-col w-full  justify-center lg:flex-row ">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <FaqCard
            question="Is it Open Source?"
            answer="No & Prolly wouldn't be 😔"
          />
        </AnimationOnScroll>

        <div className="divider lg:divider-horizontal mx-auto"></div>
        <AnimationOnScroll animateIn="animate__slideInRight">
          <FaqCard
            question="Is it Free?"
            answer="Yes! It's completely FTU 😃"
          />
        </AnimationOnScroll>
      </div>
      <br></br>
      <br></br>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <a
          href="https://discord.com/channels/922006609713066036/938986969063628862"
          target="_blank"
          className="btn btn-primary btn-wide flex flex-col  mx-auto justify-center"
        >
          View More
        </a>
      </AnimationOnScroll>
      <br></br>

      <br></br>
    </div>
  );
}

function FaqCard(props) {
  return (
    <div className="mockup-code">
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
