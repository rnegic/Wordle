import React from "react";
import GameContainer from "@/components/game/GameContainer";
import Dashboard from "@/components/layout/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between m-5">
      <GameContainer />
      <Dashboard/>
    </div>
  );
}