"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

import Link from "next/link";
import "../css/style.css";
import { useRouter } from "next/navigation";
import { userRegister } from "../../app/actions/auth";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [newPwd, setNewPwd] = useState<string>("");
  const [newPwdHide, setNewPwdHide] = useState<boolean>(true);
  const [cNewPwd, setCNewPwd] = useState<string>("");
  const [cNewPwdHide, setCNewPwdHide] = useState<boolean>(true);

  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleCaptchaChange = (value: string | null) => {
    setIsVerified(value !== null);
  };

  const handleSubmit = async () => {
    // Only submit the form if the user is verified
    if (isVerified) {
      // Send form data to your backend
      const res = await userRegister({email: email, password: newPwd})
      .then(res => {
        alert("Register Success! Please activate your email to start.");
      })
      .catch(err => router.push('signup'));

      console.log("Form submitted!");
    } else {
      alert("Please verify you are human.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-5">
      <div className="w-[95%] md:w-[80%] flex flex-col gap-12 p-3 md:p-10">
        <div className="w-full flex flex-col text-[64px] text-white text-center">
          Sign Up
        </div>
        <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[2px]"></div>
        <div className="w-full flex flex-col items-center gap-9 my-24">
          <div className="w-full md:w-[450px] flex justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">Email Address</div>
            <div className="relative flex items-center ">
              <Image
                width={23}
                height={23}
                src="/assets/gmail.png"
                alt="gmail"
                className="absolute left-4"
              ></Image>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1C1840] w-full  min-w-[fit-content] py-3 pl-12 pr-3"
              />
            </div>
          </div>
          <div className="w-full md:w-[450px] flex justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">Password</div>
            <div className="relative flex items-center ">
              <input
                type={newPwdHide ? "password" : "text"}
                value={newPwd}
                placeholder="Enter Password"
                onChange={(e) => setNewPwd(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1C1840] w-full  min-w-[fit-content] py-3 pl-11 pr-11 relative"
              />
              <Image
                width={20}
                height={20}
                src="/assets/password.png"
                alt="password"
                className="absolute left-4"
              ></Image>
              <div
                className="absolute right-5 min-w-[25px]"
                onClick={() => setNewPwdHide(!newPwdHide)}
              >
                {newPwdHide ? (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                ) : (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                )}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[450px] flex justify-start flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Confirm Password
            </div>
            <div className="relative flex items-center ">
              <input
                type={cNewPwdHide ? "password" : "text"}
                value={cNewPwd}
                placeholder="Enter Password"
                onChange={(e) => setCNewPwd(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1C1840] w-full  min-w-[fit-content] py-3 pl-11 pr-11 relative"
              />
              <Image
                width={20}
                height={20}
                src="/assets/password.png"
                alt="password"
                className="absolute left-4"
              ></Image>
              <div
                className="absolute right-5 min-w-[25px]"
                onClick={() => setCNewPwdHide(!cNewPwdHide)}
              >
                {cNewPwdHide ? (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                ) : (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                )}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[450px] flex justify-start">
            <div className="recaptcha">
              <ReCAPTCHA
                sitekey="6LcGfCIqAAAAAC_8kbGp7MwmTTTVytM9W20Ravhy" // Replace with your actual Site Key
                // secretkey ="6LcGfCIqAAAAAM9Vz2cY1U3iZsPPEWc7m1JO0zUX"
                onChange={handleCaptchaChange}
              />
            </div>
          </div>
          <button onClick={handleSubmit} className="w-full md:w-[200px] gradient-button font-bold py-3 px-5 mt-5">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
