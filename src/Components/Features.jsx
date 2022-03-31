import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Features() {
  return (
    <>
      <div className="hero  bg-base-100 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <h1 className="text-5xl font-bold mb-10 mt-10 ">Features</h1>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full  justify-center lg:flex-row">
        <FeatureCard
          title="Custom Punishments"
          desc="You can Customize the punishment, and the Bot will Punish the Attackers the way you want.
"
          previewImage="https://source.unsplash.com/random/200x200"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="Logging"
          desc="You can set a logging channel and know everything that happens in the server at all times.
"
          previewImage="https://source.unsplash.com/random/200x200"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="Whitelisting/Blacklisting"
          desc="You can Whitelist the Trusted users to make the bot ignore their actions and Blacklist people who you don't want using your bot
"
          previewImage="https://source.unsplash.com/random/200x200"
        />
      </div>
      <br></br>
      <div className="flex flex-col w-full  justify-center lg:flex-row">
        <FeatureCard
          title="Auto-Recovery"
          desc="When someone tries to Harm the server, the Bot not just Punishes them, it also Recovers Everything back to Normal.
"
          previewImage="https://source.unsplash.com/random/200x200"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="Feature toggling"
          desc="You can Toggle Anti-Nuke and Anti-Raid features ON or OFF so the bot won't take the actions you don't like.
"
          previewImage="https://source.unsplash.com/random/200x200"
        />
      </div>
    </>
  );
}

function FeatureCard(props) {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp">
      <div className="card m-1 w-96 bg-base-100 transition ease-in-out delay-100 shadow-xl hover:bg-primary hover:font-bold">
        <figure className="px-10 pt-10">
          <img src={props.previewImage} alt="Feature" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}</h2>

          <div className="card-actions">{props.desc}</div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
export default Features;
