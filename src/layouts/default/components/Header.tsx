/* eslint-disable react/function-component-definition */
import { motion, AnimateSharedLayout } from "framer-motion";
import React, { FC, useState } from "react";
import classNames from "classnames";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";
import { AuthPayload, User } from "@/store/type";
import { login, register } from "@/services/api";
import userService from "@/services/user";
const menuItems = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Địa điểm",
    path: "/places",
  },
  {
    name: "Kế hoạch",
    path: "/plans",
  },
];

type LinkProps = {
  selected: boolean;
  text: string;
  onClick: () => void;
};

const CustomLink: FC<LinkProps> = ({ selected, onClick, text }) => {
  return (
    <motion.div
      className={classNames(
        "relative font-medium flex items-center justify-center text-xl cursor-pointer",
        selected ? "text-primary" : "text-black"
      )}
      onClick={onClick}
      animate={{ opacity: selected ? 1 : 0.5 }}
    >
      {text}
      {selected && (
        <motion.div
          className={classNames(
            "absolute top-[103%] align-middle h-0.5 rounded-2xl w-3/4",
            selected ? "bg-secondary" : ""
          )}
          layoutId="underline"
        />
      )}
    </motion.div>
  );
};

const UndelinedLinks = () => {
  const [current, setCurrent] = useState<number>(0);

  const router = useRouter();

  const onClick = (index: number) => {
    setCurrent(index);
    router.push(menuItems[index].path);
  };

  return (
    <div className="flex-row hidden space-x-16 lg:flex">
      <AnimateSharedLayout>
        {menuItems.map((item, idx: number) => (
          <CustomLink
            text={item.name}
            key={idx}
            selected={current === idx}
            onClick={() => onClick(idx)}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  );
};

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHamOpen, setIsHamOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleModalOpen = (state: boolean) => {
    setIsOpen(state);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleHamClick = () => {
    setIsHamOpen(!isHamOpen);
  };

  const mobileMenuClick = (path: string) => {
    router.push(path);
    setIsHamOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setUser({ ...user, [key]: e.target.value });
  };

  const handleLogin = () => {
    login(user)
      .then((res) => {
        userService.setUser(res.data as any);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUp = () => {
    register(user)
      .then((res) => {
        userService.setUser(res.data as any);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-screen-xl px-5 py-10 mx-auto lg:px-0">
      <div className="flex flex-row items-center justify-between w-full">
        <button
          type="button"
          className="text-4xl font-bold font-Montserrat"
          onClick={() => router.push("/")}
        >
          <span className="text-primary">Travel</span>
          <span className="text-secondary">Flow.</span>
        </button>
        <UndelinedLinks />
        <PopoverPrimitive.Root onOpenChange={handleModalOpen}>
          <PopoverPrimitive.Trigger className="hidden lg:block">
            <button
              type="button"
              className="py-2 font-bold text-white rounded-md font-Montserrat px-7 bg-secondary"
              // onClick={() => router.push("/profile")}
            >
              Đăng nhập
            </button>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content>
            <div className="relative p-10 mt-5 bg-white border border-black rounded-lg w-96">
              <button
                type="button"
                className="absolute top-3 right-3"
                onClick={handleCloseModal}
              >
                <IoIosCloseCircle className="text-2xl text-primary" />
              </button>
              <div className="flex flex-col items-center space-y-5">
                <div>
                  <span className="text-2xl font-medium text-secondary">
                    Đăng nhập
                  </span>
                </div>
                <div className="flex flex-col items-start p-2 rounded-full">
                  <label htmlFor="username">Tên đăng nhập</label>
                  <input
                    className="pl-2 border rounded-lg border-primary focus:outline-none"
                    id="username"
                    onChange={(e) => handleInputChange(e, "email")}
                    type="text"
                  />
                </div>
                <div className="flex flex-col items-start p-2 rounded-full">
                  <label htmlFor="password">Mật khẩu</label>
                  <input
                    className="pl-2 border rounded-lg border-primary focus:outline-none"
                    id="password"
                    onChange={(e) => handleInputChange(e, "password")}
                    type="text"
                  />
                </div>
                <div className="flex flex-row items-center justify-center space-x-5">
                  <button onClick={handleLogin} className="general-button">
                    Đăng nhập
                  </button>
                  <button onClick={handleSignUp} className="general-button">
                    Đăng kí
                  </button>
                </div>
                <div>
                  <span>Quay lại</span>
                </div>
              </div>
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
        <button
          type="button"
          className={classNames(
            "hamburger lg:hidden relative z-20",
            isHamOpen ? "active" : ""
          )}
          onClick={handleHamClick}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={classNames(
            "fixed top-0 right-0 bg-white h-screen z-10 transition-all ease-in-out duration-500",
            isHamOpen ? "w-72" : "w-0"
          )}
        >
          <motion.div
            variants={variants}
            initial="show"
            animate="show"
            className="flex flex-col justify-center w-full h-full px-10 space-y-10 text-primary lg:hidden"
          >
            {menuItems.map((item, idx: number) => (
              <motion.div variants={items} key={idx}>
                <button
                  type="button"
                  onClick={() => mobileMenuClick(item.path)}
                >
                  <span className="text-lg font-black uppercase font-rajdhani">
                    {item.name}
                  </span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
