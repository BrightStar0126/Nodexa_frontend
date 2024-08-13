'use client'
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
// import Notification from "../../../components/Notification";
import Link from "next/link";
import Head from "next/head";
import "../css/style.css";
import { activateEmail } from "../../app/actions/auth";

const Activate = ({ params }: { params: { activation_token: string } }) => {
  const router = useRouter();
  const activation_token = params.activation_token;
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("Activate is Failed");

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const data = await activateEmail(activation_token);
          setSuccess(data.msg);
        } catch (err: any) {
          setErr(err.response.data.msg || "Something is error");
        }
      };
      activationEmail();
    } else {
      router.push("/");
    }
  }, [activation_token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Activation</title>
      </Head>
      {/* <div className="text-xl mb-5">
        <Notification err={err} success={success} />
      </div> */}
      <Link href="/login">
        <div className="w-full md:w-[200px] gradient-button font-bold py-3 px-5 mt-5">
          Go to Login
        </div>
      </Link>
    </div>
  );
};

export default Activate;
