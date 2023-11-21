import React from "react";

import style from "./Sliders.module.css";

import calcPurple from "Sliders/calcPurple (2).png";
import calcRed from "Sliders/calcRed (2).png";
import calcOrange from "Sliders/calcOrange (2).png";
import Data from "Sliders/Data.png";
import ProductViews from "Sliders/product views.png";
import Arrow from "Sliders/arrow-left.png";
import ProTips from "Sliders/Pro Tips.png";

const Slider4: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.RightDiv}>
        <div className={style.section1}>
          <h1>سیستم حسابداری متانکست</h1>
          <p>
            ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت
            بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به
            سرعت بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در
            بازار کسب و کار کمک بسزایی کند.
          </p>
          <img src="Sliders/Data.png" alt="Data" />
        </div>
        <div className={style.section2}>
          <h1>چرا باید از سیستم متانکست استفاده کنیم</h1>
          <p>
            ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت
            بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به
            سرعت بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در
            بازار کسب و کار کمک بسزایی کند.
          </p>
        </div>
        <div className={style.section3}>
          <h1>امکانات موجود در سیستم حسابداری</h1>
          <p>
            سیستم کامل مالی، سیستم کامل خزانه ، و سیستم کامل انبار که شامل ثبت
            چک ها ، ثبت فاکتور های خرید و فروش ، نگهداری سوابق خرید و فروش ،
            نگهداری سوابق مشتری ، حساب های بانکی و صندوق ، گردش موجودی کالا ،
            حواله حساب ، صورتحساب سود و زیان ، تراز نامه ، اتصال به دستگاه پوز
            ، ثبت فاکتور های درامد و هزینه میشوند.
          </p>
          <button>
            <p>اطلاعات بیشتر</p>
            <img className={style.Arrow} src="Sliders/arrow-left.png" alt="Arrow" />
          </button>
        </div>
      </div>
      <div className={style.tips}>
        <div>
          <img src="Sliders/product views.png" alt="Product Views" />
        </div>
        <div className={style.tips}>
          <img src="Sliders/Pro Tips.png" alt="Pro Tips" />
          <img src="Sliders/calcPurple (2).png" className={style.calcPurple} alt="Calc Purple" />
          <img src="Sliders/calcRed (2).png" className={style.calcRed} alt="Calc Red" />
          <img src="Sliders/calcOrange (2).png" className={style.calcOrange} alt="Calc Orange" />
        </div>
      </div>
    </div>
  );
};

export default Slider4;
