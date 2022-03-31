import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Stats() {
  return (
    <div className="flex  w-full justify-center">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="stats stats-vertical md:stats-horizontal ">
          <StatCard number="500" title="commands" />

          <StatCard number="500" title="commands" />

          <StatCard number="500" title="commands" />
        </div>
      </AnimationOnScroll>
    </div>
  );
}
function StatCard(props) {
  return (
    <div className="stat place-items-center gap-0 bg-transparent px-10 ">
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div className="stat-value tabular-nums hover:opacity-50 transition ease-in-out delay-70">
            {isVisible ? (
              <div>
                <CountUp end={props.number} duration="1" />+
              </div>
            ) : (
              props.number + "+"
            )}
          </div>
        )}
      </VisibilitySensor>
      <div className="stat-desc">{props.title}</div>
    </div>
  );
}
export default Stats;
