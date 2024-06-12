import React from "react";
import GameContainer from "@/components/game/GameContainer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between m-5">
      <GameContainer />
    </div>
  );
}