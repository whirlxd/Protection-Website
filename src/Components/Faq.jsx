import React from "react";

function Faq() {
  return (
    <div className="bg-base-200">
      <div class="hero">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold  mt-10">FAQ's</h1>
            <p className="py-6 mb-5">
              Some frequently asked questions about the bot and it's job
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full  justify-center lg:flex-row ">
        <div class="mockup-code">
          <pre data-prefix="Q:" class="text-warning">
            <code>How to setup the bot?</code>
          </pre>
          <pre data-prefix="A:" class="text-success">
            <code>Blah-ah-ah</code>
          </pre>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>

        <div class="mockup-code">
          <pre data-prefix="Q:" class="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="A:" class="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
      <br></br>
      <div class="flex flex-col w-full  justify-center lg:flex-row ">
        <div class="mockup-code">
          <pre data-prefix="Q:" class="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="A:" class="text-success">
            <code>Done!</code>
          </pre>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>

        <div class="mockup-code">
          <pre data-prefix="Q:" class="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="A:" class="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
      <br></br>
      <div class="flex flex-col w-full  justify-center lg:flex-row ">
        <div class="mockup-code">
          <pre data-prefix="Q:" class="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="A:" class="text-success">
            <code>Done!</code>
          </pre>
        </div>
        <div class="divider lg:divider-horizontal mx-auto"></div>

        <div class="mockup-code">
          <pre data-prefix="Q:" class="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="A:" class="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
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

export default Faq;
