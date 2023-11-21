import Link from "next/link";
import style from "../Login.module.css";

const Successfull: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.login}>
        <img className={style.image} src="/Login/green-check-mark-circular-validation-16213.png" alt="Success" />
        <div className={style.text}>
          <h1 className={style.title}>ورود - ثبت نام</h1>
          <h3 className={style.page}>ورود موفقیت آمیز بود</h3>
          <Link className={style.link} href="/" replace={true}>
          <button type='submit' className={style.button}>بازگشت به صفحه اصلی</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Successfull;