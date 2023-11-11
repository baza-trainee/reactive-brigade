// import { useQuery } from "@tanstack/react-query";
// import { fetchAccountBalance } from "../services/fetchAccountBalance";
import svg from "../assets/progress-bar/goal.svg";

const itemBar = Array.from({ length: 24 }, (_, idx) => ({
  id: idx + 1,
  isBalance: false,
}));

const sum = (number) => Number(number).toLocaleString("ru-RU");

const ProgressBar = () => {
  //   const { data: balance = 0 } = useQuery({
  //     queryKey: ["accountBalance"],
  //     queryFn: fetchAccountBalance,
  //     refetchInterval: 60000,
  //   });
  const balance = 50000;
  const balancePart = balance ? Math.floor((balance / 250000) * 100) : 0;
  const progress = Math.floor((itemBar.length / 100) * balancePart);

  for (let i = 0; i < progress; i += 1) {
    itemBar[i].isBalance = true;
  }

  return (
    <section className="max-w-5xl mx-auto py-14 ">
      <div className="px-4 md:px-[62px] mx-auto">
        <h2 className=" relative text-[70px] leading-none font-semibold text-center text-black mb-8 md:mb-[90px]">
          Мета
          <img
            className="absolute ml-3 -top-1/4 start-1/2 -z-10"
            src={svg}
            alt="svg ellipse"
          />
        </h2>
        <p className="text-center font-medium leading-normal text-[20px] text-black mx-auto mb-4 md:hidden">
          Разом до перемоги !!!
        </p>

        <div className="md:px-[18px] md:py-[86px] px-2.5 py-7 overflow-hidden bg-center bg-no-repeat bg-cover rounded md:rounded-lg bg-goalBgImg">
          <div className="relative py-2 pr-6 text-black bg-white rounded md:px-20 md:py-7 pl-9 md:rounded-lg bg-opacity-60">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline md:space-x-2.5">
                <span className="md:text-[32px] text-[15px] font-bold leading-normal">
                  {sum(balance)}
                </span>
                <span className="font-normal md:leading-[20px] text-[15px] hidden md:block">
                  Вже зібрано
                </span>
              </div>

              <span className="font-medium leading-normal text-[8px] md:text-[15px]">
                100%
              </span>
            </div>

            <span className="absolute -rotate-90 -start-1 bottom-9 font-medium leading-normal text-[8px] md:hidden">
              Зібрано
            </span>

            <div className="p-1 md:p-1.5 border md:border-2 border-black border-solid">
              <ul className="flex justify-between gap-x-0.5 sm:gap-x-1 md:gap-x-2 md:border border-[0.5px] border-black border-solid flex-nowrap">
                {itemBar.map(({ id, isBalance }) => {
                  return (
                    <li
                      key={id}
                      className="h-4 bg-white sm:h-9 md:h-11 basis-3 sm:basis-4 md:basis-5"
                      style={{
                        backgroundColor: isBalance ? "#2D362E" : "FFFFFF",
                      }}
                    ></li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="font-medium leading-normal text-[8px] md:text-[15px]">
                {balancePart}%
              </span>
              <div className="flex items-baseline md:space-x-2">
                <span className="font-normal leading-[20px] text-[15px] hidden md:block">
                  Спільна мета
                </span>
                <span className="text-[15px] md:text-[32px] font-bold leading-normal text-orange">
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
