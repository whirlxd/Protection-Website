import React from "react";

function Stats() {
  return (
    <div className="flex w-full justify-center">
      <div className="stats stats-vertical md:stats-horizontal ">
        <div className="stat place-items-center gap-0 bg-transparent px-10 ">
          <div className="stat-value tabular-nums hover:opacity-50 transition ease-in-out delay-70">
            200+
          </div>
          <div className="stat-desc">commands</div>
        </div>
        <div className="stat place-items-center gap-0 bg-transparent px-10 ">
          <div className="stat-value tabular-nums hover:opacity-50 transition ease-in-out delay-70">
            500+
          </div>
          <div className="stat-desc">servers</div>
        </div>
        <div className="stat place-items-center gap-0 bg-transparent px-10 ">
          <div className="stat-value tabular-nums hover:opacity-50 transition ease-in-out delay-70">
            10000+
          </div>
          <div className="stat-desc">users</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
