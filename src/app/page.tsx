import React from "react";
import GameContainer from "@/components/game/GameContainer";
import LanguageSelector from "@/components/tools/LanguageSelector";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <GameContainer />
    </div>
  );
}