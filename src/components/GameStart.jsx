import logo from "../assets/logo.svg";
import xTurn from "../assets/icon-x-turn.svg";
import oTurn from "../assets/icon-o-turn.svg";
import xSymbol from "../assets/icon-x.svg";
import oSymbol from "../assets/icon-o.svg";
import xOutline from "../assets/icon-x-outline.svg";
import oOutline from "../assets/icon-o-outline.svg";
import restartIcon from "../assets/icon-restart.svg";

function GameStart({ openRestartModal }) {
  return (
    <div className="xs:my-36 mx-auto my-0 mt-6 mb-32 flex max-w-[31.75rem] flex-col px-6">
      <div className="flex items-center justify-between">
        <img className="" src={logo} alt="XO" />

        <div className="bg-semi-dark-navy xs:rounded-10 xs:min-w-[140px] xs:min-h-[52px] xs:px-7 xs:pt-3 xs:pb-4 xs:gap-3 flex size-10 min-w-[101px] items-center gap-2 rounded-sm px-3 pt-2 pb-3 shadow-sm">
          <img src={xTurn} />

          <span className="text-silver xs:text-base xs:tracking-widest text-sm font-bold tracking-wide uppercase">
            Turn
          </span>
        </div>

        <button
          onClick={openRestartModal}
          className="bg-silver focus:outline-light-blue-500 shadow-silver xs:size-[52px] xs:rounded-10 hover:bg-silver-light grid size-10 cursor-pointer place-content-center rounded-sm transition-all focus-visible:outline focus-visible:outline-offset-2"
        >
          <img src={restartIcon} alt="" />
        </button>
      </div>
      <div
        className="xs:mt-5 mt-16 grid grid-cols-3 grid-rows-3 place-items-center gap-3"
        role="group"
        aria-label="Tic Tac Toe board"
      >
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={xSymbol} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={xOutline} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={oSymbol} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={xSymbol} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={oOutline} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={xSymbol} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={oSymbol} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={xSymbol} alt="" />
        </button>
        <button className="bg-semi-dark-navy xs:size-[140px] xs:rounded-2xl rounded-10 grid size-24 w-full place-content-center shadow-lg">
          <img className="xs:size-16 size-10" src={oSymbol} alt="" />
        </button>
      </div>

      <div className="xs:gap-0 mt-5 flex items-center justify-between gap-3">
        <div className="bg-light-blue-500 xs:rounded-2xl xs:px-6 xs:py-3 xs:max-w-[140px] rounded-10 flex w-full min-w-[96px] flex-col items-center px-4 py-2">
          <span className="text-dark-navy xs:text-base xs:tracking-wider text-center text-xs font-normal tracking-wide uppercase">
            X (You)
          </span>
          <span className="text-dark-navy xs:text-2xl text-center text-xl font-bold tracking-widest uppercase">
            0
          </span>
        </div>

        <div className="bg-silver xs:rounded-2xl xs:py-3 xs:px-6 xs:max-w-[140px] rounded-10 flex w-full min-w-[96px] flex-col items-center px-4 py-2">
          <span className="text-dark-navy xs:text-base xs:tracking-wider text-center text-xs font-normal tracking-wide uppercase">
            Ties
          </span>
          <span className="text-dark-navy xs:text-2xl text-center text-xl font-bold tracking-widest uppercase">
            0
          </span>
        </div>

        <div className="bg-light-yellow-500 xs:rounded-2xl xs:py-3 xs:px-6 xs:max-w-[140px] rounded-10 flex w-full min-w-[96px] flex-col items-center px-4 py-2">
          <span className="text-dark-navy xs:text-base xs:tracking-wider text-center text-xs font-normal tracking-wide uppercase">
            O (Cpu)
          </span>
          <span className="text-dark-navy xs:text-2xl text-center text-xl font-bold tracking-widest uppercase">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameStart;
