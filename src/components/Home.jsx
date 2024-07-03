import React from "react";
import dice from "../../public/images/dice.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-2 h-4/5 flex justify-between flex-wrap w-[85%] mx-auto mt-[3.5rem]">
      <img src={dice} alt="Dice" style={{ height: 450, width: 450 }} />

      <div className="w-1/2 flex flex-col align-middle justify-center">
        <p className="text-7xl text-center font-bold">DICE GAME</p>

        <Link to="/play-game"
          className=" w-fit px-10 py-1 rounded-md my-8 mx-auto text-2xl text-center text-white bg-black font-medium border-2 border-black hover:bg-gray-300 hover:text-black"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
