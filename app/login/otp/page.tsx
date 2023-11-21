"use client"
import React, { useEffect, useState } from 'react';
import style from "../Login.module.css";
import OtpInput from 'react-otp-input';

import { useOtpApi } from "./UI/API/OtpAPI";
import {useRouter} from "next/navigation";

const Otp: React.FC = () => {
  const [otp, setOtp] = useState<string>('');
  const [errors, setErrors] = useState<string>("");
  const Navigate = useRouter();

  const { refetch, isLoading, isSuccess , isError } =
    useOtpApi(otp);

  useEffect(() => {
    if (otp.length === 5) {
      refetch();
    }
  }, [otp, refetch]);

  useEffect(() => {
    
    if (isSuccess) {
      Navigate.push("/login/password");
    } else if(isError) {
      setErrors("خطایی رخ داد");
    }
  }, [isSuccess , isError]);

  const handleClick = () => {
    refetch();
  };

  return (
    <div className={style.container}>
      <div className={style.login}>
        <img className={style.image} src="/Login/Login.png" alt="Login" />
        <div className={style.text}>
          <h1 className={style.title}>ورود - ثبت نام</h1>
          <h3 className={`${style.otpP} ${style.page}`}>رمز پنج رقمی را وارد کنید</h3>

          <OtpInput
            shouldAutoFocus={true}
            containerStyle={style.input}
            inputStyle={style.slot}
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
          />
          <p className={style.error}>{errors && errors}</p>
          <button onClick={() => handleClick()} className={style.button}>
            {isLoading ? "درحال بارگیری ..." : "تایید کد"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
