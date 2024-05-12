import React from 'react';
import GameBoard from "@/components/game/GameBoard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <GameBoard n={5}/>
    </div>
  );
}
