import svg from "../assets/progressBar/goal.svg";

const ProgressBar = () => {
  const itemBar = Array.from({ length: 24 }, (_, idx) => idx + 1);

  const sum = (number) => number.toLocaleString("ru-RU");

  return (
    <section className="max-w-5xl py-14 mx-auto ">
      <div className="px-[62px] mx-auto">
        {/* <div className="relative "> */}
        <h2 className=" relative text-[70px] leading-none font-semibold text-center text-black mb-8 mb-[90px]">
          Мета
          <img
            className="absolute -top-5 right-[372px] -z-10"
            src={svg}
            alt="svg ellipse"
          />
        </h2>

        {/* </div> */}
        <p className="text-center font-medium leading-normal text-[20px] text-black mx-auto mb-4">
          Разом до перемоги !!!
        </p>
        <div className="px-[18px] py-[86px] overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg bg-goal-image">
          <div className="px-20 py-7 text-black rounded-lg bg-white bg-opacity-60">
            <div className="flex justify-between items-center">
              <div className="flex items-baseline space-x-2.5">
                <span className="text-[32px] font-bold leading-normal">
                  {sum(45000)}
                </span>
                <span className="font-normal leading-[20px] text-[15px]">
                  Вже зібрано
                </span>
              </div>

              <span className="font-medium leading-normal text-[15px]">
                100%
              </span>
            </div>

            <div className="p-2 border-2 border-black border-solid">
              <ul className="flex flex-row space-x-2.5 border border-black border-solid flex-nowrap">
                {itemBar.map((id) => {
                  return <li key={id} className="h-11 bg-white basis-5"></li>;
                })}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium leading-normal text-[15px]">0%</span>
              <div className="flex items-baseline space-x-2.5">
                <span className="font-normal leading-[20px] text-[15px]">
                  Спільна мета
                </span>
                <span className="text-[32px] font-bold leading-normal text-orange">
                  {sum(250000)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
