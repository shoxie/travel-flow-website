/* eslint-disable react/function-component-definition */
import { motion, AnimateSharedLayout } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import classNames from "classnames";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/router";
import { AuthPayload, User } from "@/store/type";
import { getUserInfo, login, register } from "@/services/api";
import userService from "@/services/user";
import Link from "next/link";
import { useAtom } from "jotai";
import { userAtom } from "@/store";
import { useNotification } from "@/hooks/useNotification";

const menuItems = [
  {
    name: "Trang chủ",
    path: "/",
    isMobile: false,
  },
  {
    name: "Địa điểm",
    path: "/places",
    isMobile: false,
  },
  {
    name: "Kế hoạch",
    path: "/plans",
    isMobile: false,
  },
  {
    name: "Đăng nhập",
    path: "/auth",
    isMobile: true,
  },
  {
    name: "Trang cá nhân",
    path: "/profile",
    isMobile: true,
  },
];

type LinkProps = {
  selected: boolean;
  text: string;
  onClick: () => void;
  isMobile: boolean;
};

const CustomLink: FC<LinkProps> = ({ selected, onClick, text, isMobile }) => {
  return (
    <motion.div
      className={classNames(
        "relative font-medium flex items-center justify-center text-xl cursor-pointer",
        selected ? "text-primary" : "text-black",
        isMobile ? "hidden" : ""
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
            isMobile={item.isMobile}
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [existingUser, setExistingUser] = useState<string>("");
  const [userInfo, setUserInfo] = useAtom(userAtom);

  const router = useRouter();

  const noti = useNotification();

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
    noti.show({
      type: "loading",
      message: "Đang đăng nhập...",
    });
    login(user)
      .then((res) => {
        userService.setUser(res.data as any);
        setIsLoggedIn(true);
        handleModalOpen(false);
        noti.show({
          type: "success",
          message: "Đăng nhập thành công",
        });
      })
      .catch((err) => {
        noti.show({
          type: "error",
          message: "Đăng nhập thất bại",
        });
        console.log(err);
      });
  };

  const handleSignUp = () => {
    register(user)
      .then((res) => {
        userService.setUser(res.data as any);
        handleModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const user = userService.getUser();
    if (user) {
      setIsLoggedIn(true);
      getUserInfo().then((res) => {
        setUserInfo(res.data);
        setExistingUser(res.data.email);
      });
    }
  }, [isLoggedIn]);

  return (
    <div className="max-w-screen-xl px-5 py-10 mx-auto lg:px-0 relative z-[200]">
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
          <PopoverPrimitive.Trigger
            className={classNames(isLoggedIn ? "hidden" : "hidden lg:block")}
          >
            <div
              className="py-2 font-bold text-white rounded-md cursor-pointer font-Montserrat px-7 bg-secondary"
              // onClick={() => router.push("/profile")}
            >
              Đăng nhập
            </div>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content className="relative z-[2]">
            {isOpen ? (
              <div className="relative z-[2]">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 70,
                  }}
                  transition={{
                    delay: 0.3,
                  }}
                  className="relative z-[10] p-10 mt-5 bg-white border border-black rounded-lg w-96"
                >
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
                        type="password"
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
                </motion.div>
              </div>
            ) : null}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
        <div className={classNames(isLoggedIn ? "md:block  flex" : "hidden")}>
          <Link href="/profile" passHref>
            <a className="hover:underline">{userInfo?.email}</a>
          </Link>
          <a
            className="ml-5 hover:underline"
            href="#"
            onClick={() => {
              userService.removeUser();
              router.reload();
            }}
          >
            Đăng xuất
          </a>
        </div>
        <div className="lg:hidden relative z-[200]">
          <button
            type="button"
            className={classNames("hamburger relative z-20", {
              active: isHamOpen,
            })}
            onClick={handleHamClick}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={classNames(
            "fixed top-0 right-0 bg-white h-screen z-10 transition-all ease-in-out duration-500",
            isHamOpen ? "w-72 border-l border-primary" : "w-0"
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
