import React from "react";

function hero() {
  return (
    <div class="hero custom-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <img
            src="https://images-ext-2.discordapp.net/external/36yZWYi2nwViarEt73V-9kTCR2HhrtEnsH2CSjZswas/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/600325534332747792/95df1defc794b77ae7a47324f1187564.webp?width=703&height=703"
            class=" h-52 w-52 mx-auto"
          />
          <h1 class="text-5xl font-bold">Protection</h1>
          <p class="py-6">
            Protection is a bot that will protect your server by stopping
            suspicious activity taken by your trusted ones!
          </p>
          <a
            href="https://top.gg/bot/750253000638857216/invite"
            target="_blank"
            class="btn btn-primary mr-4"
          >
            Invite
          </a>
          <a
            href="https://top.gg/bot/750253000638857216/vote"
            target="_blank"
            class="btn btn-primary"
          >
            Vote
          </a>
        </div>
      </div>
    </div>
  );
}

export default hero;
