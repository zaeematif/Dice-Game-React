import React, { useId, useState } from "react";

const GamePage = () => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const [isHidden, setHidden] = useState(true);

  const [diceNumber, setDiceNumber] = useState(3);

  let [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState(1);
 

  return (
    <div>
      <nav className="flex justify-between px-12 py-2">
        <div className="left">
          <p className="text-7xl font-medium text-center">{score}</p>
          <p>Total Score</p>
        </div>

        <div className="right">
          <div className="flex">
            {numbers.map((number) => (
              <button onClick={() => setSelectedNumber({number})}
                className={`w-12 h-12 p-2 m-2 border-2 
                  border-black text-center align-middle 
                  hover:bg-black hover:text-white 
                  focus:bg-black focus:text-white
                  `}
                key={number}
              >
                {number}
              </button>
            ))}
          </div>

          <p className="flex flex-row-reverse m-2">Select Number</p>
        </div>
      </nav>

      <div className="hero flex flex-col w-fit mx-auto mt-12">
        <div
          onClick={() => {
            let number = Math.floor(Math.random() * 10) + 1 ;
            //console.log("Number Generated:  " + number);

            number = number <= 6 ? (number) : ((number)-6)
            setDiceNumber(
              number
            );

            if(number === selectedNumber.number) setScore(++score);

            console.log("D: " + number + " vs " + selectedNumber.number + " :N");
          }}
          className="overflow-hidden mx-auto w-fit p-2 mb-1 hover:cursor-pointer"
        >
          
          <img
            className="h-36 w-36 rounded-2xl"
            src={`../../public/images/dice-${diceNumber}.png`}
            
            alt="DICE"
          />
          
        </div>

        <div className="btns flex flex-col">
          <p className="mb-4 text-xl font-semibold text-center">
            Click on the Dice to Roll
          </p>

          <button onClick={() => setScore(0)}
          className=" w-fit px-6 py-1 rounded-md my-3 mx-auto text-lg text-center text-black bg-white font-medium border-2 border-black hover:bg-black hover:text-white">
            Reset Score
          </button>
          <button
            onClick={() => setHidden(!isHidden)}
            className=" w-fit px-6 py-1 rounded-md my-3 mx-auto text-lg text-center text-white bg-black font-medium border-2 border-black hover:bg-gray-300 hover:text-black"
          >
            Show Rules
          </button>

          <div className={`p-6 bg-red-100 my-8 ${isHidden ? "hidden" : ""}`}>
            <p className="mb-4 text-xl font-semibold">How to play dice game</p>

            <p className="text-sm font-medium">
              Select any number <br />
              Click on dice image <br />
              after click on dice if selected number is equal to dice number you
              will get same point as dice <br />
              if you get wrong guess then 2 point will be dedcuted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
