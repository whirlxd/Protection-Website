import React from "react";

function hero() {
  return (
    <div className="hero custom-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            src="https://images-ext-2.discordapp.net/external/36yZWYi2nwViarEt73V-9kTCR2HhrtEnsH2CSjZswas/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/600325534332747792/95df1defc794b77ae7a47324f1187564.webp?width=703&height=703"
            className=" h-52 w-52 mx-auto"
            alt="protection-logo"
          />

          <h1 className="text-5xl font-bold">Protection</h1>
          <p className="py-6">
            Protection is a bot that will protect your server by stopping
            suspicious activity taken by your trusted ones!
          </p>

          <a
            href="https://top.gg/bot/750253000638857216/invite"
            target="_blank"
            className="btn btn-primary mr-4"
          >
            Invite
          </a>

          <a
            href="https://top.gg/bot/750253000638857216/vote"
            target="_blank"
            className="btn btn-primary"
          >
            Vote
          </a>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default hero;
//  <div class="rating">
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//               checked
//             />
//             <input
//               type="radio"
//               name="rating-4"
//               class="mask mask-star-2 bg-green-500"
//             />
//           </div>
