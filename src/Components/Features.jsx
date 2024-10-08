import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Features() {
  return (
    <>
      <div className="hero  bg-base-100 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-10 mt-10 ">Features</h1>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-col w-full  justify-center lg:flex-row sm:carousel">
        <FeatureCard
          title="Custom Punishments"
          desc="You can Customize the punishment, and the Bot will Punish the Attackers the way you want.
"
          previewImage="https://media.discordapp.net/attachments/921234167306526770/988068983074869318/unknown.png"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="Logging"
          desc="You can set a logging channel and know everything that happens in the server at all times.
"
          previewImage="https://media.discordapp.net/attachments/921234167306526770/988065657377677383/unknown.png"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="Whitelisting/Blacklisting"
          desc="You can Whitelist the Trusted users to make the bot ignore their actions and Blacklist people who you don't want using your bot
"
          previewImage="https://media.discordapp.net/attachments/921234167306526770/988070258357198848/unknown.png"
        />
      </div>
      <br></br>
      <div className="flex flex-col w-full  justify-center lg:flex-row">
        <FeatureCard
          title="Auto-Recovery"
          desc="When someone tries to Harm the server, the Bot not just Punishes them, it also Recovers Everything back to Normal.
"
          previewImage="https://media.discordapp.net/attachments/921234167306526770/988071406216548402/unknown.png"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="Feature toggling"
          desc="You can Toggle Anti-Nuke and Anti-Raid features ON or OFF so the bot won't take the actions you don't like.
"
          previewImage="https://media.discordapp.net/attachments/921234167306526770/988071808932675604/unknown.png"
        />
      </div>
    </>
  );
}

function FeatureCard(props) {
  return (
    <div className=" carousel-item card m-1 w-96 bg-base-100 transition ease-in-out delay-100 shadow-xl hover:bg-primary hover:font-bold">
      <figure className="px-10 pt-10">
        <img
          src={props.previewImage}
          alt="Feature"
          className="rounded-xl"
          height={200}
          width={200}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{props.title}</h2>

        <div className="card-actions">{props.desc}</div>
      </div>
    </div>
  );
}
export default Features;
