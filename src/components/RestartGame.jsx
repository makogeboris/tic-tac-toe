function RestartGame({ closeRestartModal }) {
  return (
    <>
      <div className="bg-semi-dark-navy fixed top-1/2 left-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 py-16 sm:gap-8">
        <h2 className="text-silver text-center text-2xl leading-12 font-bold tracking-[1px] uppercase sm:text-[2.5rem] sm:tracking-[2.5px]">
          Restart Game?
        </h2>

        <div className="items center flex gap-4">
          <button
            onClick={closeRestartModal}
            className="text-dark-navy rounded-10 shadow-silver focus-visible:outline-light-blue-500 hover:bg-silver-light bg-silver cursor-pointer px-4 py-3.5 text-center text-base font-bold tracking-wider uppercase transition-all focus-visible:outline focus-visible:outline-offset-2"
          >
            No, Cancel
          </button>
          <button
            onClick={closeRestartModal}
            className="text-dark-navy rounded-10 hover:bg-light-yellow-100 focus-visible:outline-light-blue-500 bg-light-yellow-500 shadow-yellow-sm cursor-pointer px-4 py-3.5 text-center text-base font-bold tracking-wider uppercase transition-all focus-visible:outline focus-visible:outline-offset-2"
          >
            Yes, Restart
          </button>
        </div>
      </div>
      <div className="fixed inset-0 z-10 h-full w-full bg-black opacity-[0.5] mix-blend-normal backdrop-blur-sm transition-all duration-500"></div>
    </>
  );
}

export default RestartGame;
