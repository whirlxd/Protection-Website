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
          title="feature"
          desc="Feature"
          previewImage="https://source.unsplash.com/random/200x200"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="feature"
          desc="Feature"
          previewImage="https://source.unsplash.com/random/200x200"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="feature"
          desc="Feature"
          previewImage="https://source.unsplash.com/random/200x200"
        />
      </div>
      <br></br>
      <div className="flex flex-col w-full  justify-center lg:flex-row">
        <FeatureCard
          title="feature"
          desc="Feature"
          previewImage="https://source.unsplash.com/random/200x200"
        />
        <div className="divider lg:divider-horizontal mx-auto"></div>

        <FeatureCard
          title="feature"
          desc="Feature"
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
