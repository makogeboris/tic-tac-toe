import xSymbol from "../assets/icon-x.svg";
import oSymbol from "../assets/icon-o.svg";

function GameResults() {
  return (
    <>
      <div className="bg-semi-dark-navy fixed top-1/2 left-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center py-11">
        <p className="text-silver text-center text-base font-bold tracking-wider uppercase">
          You won!
        </p>

        <div className="mt-4 flex items-center gap-2 sm:gap-6">
          <img className="size-10 sm:size-16" src={xSymbol} alt="" />

          <h2 className="text-light-blue-500 text-center text-2xl leading-12 font-bold tracking-[1px] uppercase sm:text-[2.5rem] sm:tracking-[2.5px]">
            Takes the round
          </h2>
        </div>

        <div className="items center mt-6 flex gap-4">
          <button className="text-dark-navy rounded-10 shadow-silver focus-visible:outline-light-blue-500 hover:bg-silver-light bg-silver cursor-pointer px-4 py-3.5 text-center text-base font-bold tracking-wider uppercase transition-all focus-visible:outline focus-visible:outline-offset-2">
            Quit
          </button>
          <button className="text-dark-navy rounded-10 hover:bg-light-yellow-100 focus-visible:outline-light-blue-500 bg-light-yellow-500 shadow-yellow-sm cursor-pointer px-4 py-3.5 text-center text-base font-bold tracking-wider uppercase transition-all focus-visible:outline focus-visible:outline-offset-2">
            Next Round
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-[0.5] mix-blend-normal backdrop-blur-sm transition-all duration-500"></div>
    </>
  );
}

export default GameResults;
