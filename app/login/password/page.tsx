"use client"
import { useState  } from "react";
import style from "../Login.module.css"
import  Link  from 'next/link';



const Password: React.FC = () => {
    const [Value , setValue] = useState("")

  return (
    <div className={style.container}>
      <div className={style.login}>
        <img className={style.image} src= "/Login/Login.png" alt="Login" />
        <div className={style.text}>
          <h1 className={style.title}>ورود - ثبت نام</h1>
          <h3 className={style.page}>رمز خود را وارد کنید</h3>


              <form >
                <input
                  className={style.number}
                  type="password"
                  name="password"
                  onChange={(e) => {setValue(e.target.value)}}
                  value={Value}
                />
                <p className={style.error}>
                </p>

                <Link
                  className={style.link}
                  href ="successfull" 
                  replace={true}
                >
                  <button
                    className={style.button}
                  >
                    تایید رمز
                  </button>
                </Link>
              </form>
        </div>
      </div>
    </div>
  );
};

export default Password;

