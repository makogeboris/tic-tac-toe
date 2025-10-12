import logo from "../assets/logo.svg";

export default function NewGame() {
  return (
    <div className="xs:gap-10 mx-auto my-0 flex max-w-[31.75rem] flex-col items-center justify-center gap-8 px-6">
      <img src={logo} alt="XO" />
      <div className="bg-semi-dark-navy shadow-start flex w-full flex-col items-center rounded-2xl px-6 pt-6 pb-7 text-center">
        <p className="text-silver text-base font-bold tracking-widest">
          PICK PLAYER 1’S MARK
        </p>

        <div className="bg-dark-navy mt-6 flex w-full items-center justify-center rounded-[10px] p-2">
          <button className="bg-dark-navy hover:bg-semi-dark-navy focus-visible:outline-light-blue-500 grid w-full cursor-pointer place-content-center rounded-[10px] px-12 py-2.5 transition-all focus-visible:outline-2 sm:px-[5.1875rem]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z"
                fill="#A8BFC9"
              />
            </svg>
          </button>

          <button className="bg-silver hover:bg-silver-light focus-visible:outline-light-blue-500 grid w-full cursor-pointer place-content-center items-center rounded-[10px] px-12 py-2.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-[5.1875rem]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z"
                fill="#1A2A33"
              />
            </svg>
          </button>
        </div>
        <p className="text-silver mt-4 text-sm font-medium tracking-wide">
          REMEMBER : X GOES FIRST
        </p>
      </div>

      <div className="xs:gap-5 flex w-full flex-col items-center gap-4">
        <button className="bg-light-yellow-500 shadow-y xs:pt-4 xs:pb-6 text-dark-navy xs:text-xl xs:tracking-[1.25px] hover:bg-light-yellow-100 focus-visible:outline-light-yellow-500 w-full cursor-pointer rounded-2xl py-3.5 pb-5 text-base font-bold tracking-widest transition-all focus-visible:outline-2 focus-visible:outline-offset-2">
          NEW GAME (VS CPU)
        </button>
        <button className="bg-light-blue-500 shadow-b xs:pt-4 xs:pb-6 text-dark-navy xs:text-xl xs:tracking-[1.25px] hover:bg-light-blue-200 focus-visible:outline-light-blue-500 w-full cursor-pointer rounded-2xl py-3.5 pb-5 text-base font-bold tracking-widest transition-all focus-visible:outline-2 focus-visible:outline-offset-2">
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}
