"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import "../css/style.css";
export default function Header() {
  const [visible, setVisible] = useState(0);
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showAccModal, setShowAccModal] = useState(false);
  const [mouseNavPosition, setMouseNavPosition] = useState({ x: 0, y: 0 });
  const [mouseAccPosition, setMouseAccPosition] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const accModalRef = useRef<HTMLImageElement>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMouseNavPosition({ x: event.clientX, y: event.clientY });
    handleToggle();
    setShowModal(true);
  };
  const path = usePathname();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleSignup = () => {
    router.push("/signup");
  };
  const handleLogout = () => {
    console.log("handleLogout ======>>>>>>>>>>");
    localStorage.setItem("token", "");
    router.push("/");
  };
  const handleMyAccount = () => {
    router.push("/myAccount");
  };


  const [width, setWidth] = useState<number>(window.innerWidth);
  console.log("screen width------->", width);
  useEffect(() => {
    const useAuth = !!localStorage.getItem('token');
    if (useAuth) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    setShowModal(false);
    setShowAccModal(false);
  }, [width, setWidth]);
  const handleToggle = () => {
    if (width >= 768 && width < 1024) {
      setVisible(1);
    } else setVisible(2);
    console.log(visible);
  };

  const handleAccountToggle = (event: React.MouseEvent<HTMLImageElement>) => {
    setMouseAccPosition({ x: event.clientX, y: event.clientY });
    setShowAccModal(true);
  };

  useEffect(() => {
    const modal = document.getElementById("modal");
    const accModal = document.getElementById("accModal");
    window.onclick = function (event) {
      if (event.target == modal || event.target == accModal) {
        setShowModal(false);
        setShowAccModal(false);
      }
    };
  });

  return (
    <div className="p-7 bg-[#080525] border-b border-[white] overflow-auto">
      <header className="header ">
        <div
          className="logo cursor-pointer min-w-[180px]"
          onClick={() => router.push("/")}
        >
          <Image src="/logo-name-hosting.png" width={230} height={50} alt="NODEXA Hosting" />
        </div>

        <nav className="hidden  lg:flex gap-[100px] text-[#b0b0b0] text-xl">
          <a href="/sharedNodes" className=" hover:border-b border-white uppercase" style={{ fontFamily: "sora-bold" }}>
            Shared Nodes
            <div className={`${path == "/sharedNodes" ? "flex" : "hidden"} w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]`}></div>
          </a>
          <a href="/privateNodes" className=" hover:border-b border-white uppercase" style={{ fontFamily: "sora-bold" }}>
            Private Nodes
            <div className={`${path == "/privateNodes" ? "flex" : "hidden"} w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]`}></div>
          </a>
          <a href="/dashboard" className=" hover:border-b border-white uppercase" style={{ fontFamily: "sora-bold" }}>
            Dashboard
            <div className={`${path == "/dashboard" ? "flex" : "hidden"} w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]`}></div>
          </a>
        </nav>

        <div className="flex gap-[10px] items-center relative">
          <button
            className="flex lg:hidden items-center justify-center cursor-pointer"
            onClick={handleButtonClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {showModal && (
            <div
              id="modal"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                zIndex: 50,
              }}
            >
              <div
                ref={modalRef}
                style={{
                  position: "absolute",
                  color: "white",
                  backgroundColor: "#080525",
                  border: "1px solid #1EC0CA",

                  right: `${width - mouseNavPosition.x}px`,
                  top: `${mouseNavPosition.y -
                    (modalRef.current?.offsetHeight || 0) / 2
                    }px`,
                  zIndex: 1,
                }}
              >
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="hover:bg-[#3A73E3] cursor-pointer p-[4px_16px]"
                    style={{ fontFamily: "sora-bold" }}
                  >
                    Shared Nodes
                  </a>
                  <a
                    href="#"
                    className="hover:bg-[#3A73E3]  cursor-pointer p-[4px_16px]"
                    style={{ fontFamily: "sora-bold" }}
                  >
                    Private Nodes
                  </a>
                  <a
                    href="/dashboard"
                    className="hover:bg-[#3A73E3]  cursor-pointer p-[4px_16px]"
                    style={{ fontFamily: "sora-bold" }}
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          )}
          <Image
            src="/navbar/notification.png"
            alt="notification"
            width={50}
            height={50}
            className="cursor-pointer"
          />
          {!isAuth &&
            <div className="hidden md:flex gap-[10px]">
              <button className="login" onClick={handleLogin} style={{ fontFamily: "sora-bold" }}>
                LOG IN
              </button>
              <button className="signup" onClick={handleSignup} style={{ fontFamily: "sora-bold" }}>
                SIGN UP
              </button>
            </div>
          }

          {isAuth &&
            <Image
              src="/navbar/account.png"
              alt="Account"
              width={50}
              height={50}
              onClick={handleAccountToggle}
              className="cursor-pointer"
            />
          }

          {showAccModal && isAuth && (
            <div
              id="accModal"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                zIndex: 50,
              }}
            >
              <div
                ref={accModalRef}
                style={{
                  position: "absolute",
                  color: "white",
                  backgroundColor: "#080525",
                  border: "1px solid #1EC0CA",

                  right: `${width - mouseAccPosition.x}px`,
                  top: `${mouseAccPosition.y -
                    (accModalRef.current?.offsetHeight || 0) / 2
                    }px`,
                  zIndex: 1,
                }}
              >
                <div className="flex flex-col w-full gap-2 m-[12px_16px]">
                  <h1 className="text-[14px] text-white">Hi Username!</h1>
                  <button
                    className="signup text-[12px]"
                    onClick={handleMyAccount}
                  >
                    Account
                  </button>
                  <button className="login text-[12px]" onClick={handleLogout}>
                    Log out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
