import HeroBackground from "public/assets/herobg.png";
import { GoLocation } from "react-icons/go";
import {
  IoSearchSharp,
  IoCalendarNumberOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import classNames from "classnames";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  const router = useRouter();

  const onSearch = () => {
    router.push(`/places?search=${searchText}`);
  };

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
  };

  const handleCalendarOpen = () => {
    if (isCalendarOpen) {
      setIsCalendarOpen(false);
      setIsExpanded(false);
    } else {
      setIsCalendarOpen(true);
      setIsExpanded(true);
    }
  };

  return (
    <div className="relative z-[100] mx-auto max-w-screen-xl lg:px-0 px-5">
      <div
        className="bg-cover bg-no-repeat bg-center lg:h-[50vh] lg:min-h-[50vh] rounded-xl relative z-[1]"
        style={{ backgroundImage: `url(${HeroBackground.src})` }}
      >
        <div className="pt-10">
          <div className="text-center">
            <h1 className="text-xl font-bold text-white lg:text-4xl">
              Du lịch 4.0
              <br />
              An toàn - Hiện đại - Tiện lợi
            </h1>
          </div>
        </div>
        <div className="block lg:absolute lg:mt-0 mt-28 lg:-translate-x-1/2 lg:-bottom-12 lg:left-1/2 min-h-max lg:min-w-max">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-6 bg-white lg:flex-row lg:space-x-10 lg:shadow-2xl bg-opacity-80 rounded-2xl">
              <div className="flex flex-row w-full space-x-3">
                <div className="mt-1">
                  <GoLocation className="text-2xl" />
                </div>
                <div className="flex flex-col items-start">
                  <div>
                    <span className="text-xl font-medium">Địa điểm</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full text-sm font-medium text-gray-500 bg-transparent focus:outline-none"
                      placeholder="Nơi bạn muốn đến"
                      onChange={onSearchTextChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-3">
                <div className="mt-1">
                  <IoCalendarNumberOutline className="text-2xl" />
                </div>
                <div className="flex flex-col items-start">
                  <div>
                    <span className="text-xl font-medium">Ngày khởi hành</span>
                  </div>
                  <div className="relative z-[2]">
                    <button
                      className="text-sm font-medium text-gray-500"
                      onClick={handleCalendarOpen}
                    >
                      Chọn ngày đi nào
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full space-x-3">
                <div className="mt-1">
                  <IoPeopleOutline className="text-2xl" />
                </div>
                <div className="flex flex-col items-start">
                  <div>
                    <span className="text-xl font-medium">Số lượng</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full text-sm font-medium text-gray-500 bg-transparent focus:outline-none"
                      placeholder="Bạn đồng hành cùng"
                      onChange={onSearchTextChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="p-4 bg-primary rounded-xl"
                  onClick={onSearch}
                >
                  <IoSearchSharp className="text-2xl text-white" />
                </button>
              </div>
            </div>
          </div>
          <motion.div
            className={classNames(
              "absolute w-full mt-3 shadow-2xl rounded-xl overflow-hidden"
            )}
            animate={{
              height: isExpanded ? "auto" : 0,
              transition: {
                duration: 0.4,
              },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex items-center justify-center p-3 bg-white">
              {isCalendarOpen && (
                <div>
                  <Calendar />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
