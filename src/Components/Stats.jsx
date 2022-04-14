import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Stats() {
  return (
    <div className="flex  w-full justify-center">
    
        <div className="stats stats-vertical md:stats-horizontal ">
          <StatCard number="70000" title="users" extra="+" />

          <StatCard number="250" title="servers" extra="+" />

          <StatCard number="99" title="uptime" extra="%" />
        </div>
    
    </div>
  );
}
function StatCard(props) {
  return (
    <div className="stat place-items-center gap-0 bg-transparent px-10 ">
     
          <div className="stat-value tabular-nums hover:opacity-50 transition ease-in-out delay-70">
           
              <div>
                <CountUp end={props.number} duration="0.5" />{" "}
                <span className="text-2xl">{props.extra}</span>
              </div>
          
       
    

      <div className="stat-desc">{props.title}</div>
      </div>
      </div>
  );
}
export default Stats;
