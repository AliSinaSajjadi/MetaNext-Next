"use client"
import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Comments from "./API/Comments";
import style from "./styles/Swiper2.module.css";


interface Comment {
  arrow: string;
  color: string;
  percentage: number;
  name: string;
  role: string;
  text: string;
  url: string;
}

const Swiper2: React.FC = () => {
  const swiperElRef = useRef<HTMLDivElement>(null);
  const [isPrevButtonClickable, setIsPrevButtonClickable] = useState(true);
  const [isNextButtonClickable, setIsNextButtonClickable] = useState(true);
  const comments: any = Comments;

  function toPersianNumerals(input: string): string {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return input.replace(/\d/g, (match) => persianDigits[+match]);
  }

  useEffect(() => {
    let swiper: Swiper | null = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: 500,
        spaceBetween: 50,
        slidesPerView: 2,
      });

      swiper.on("slideChange", () => {
        setIsPrevButtonClickable(!swiper!.isBeginning);
        setIsNextButtonClickable(!swiper!.isEnd);
      });

      setIsPrevButtonClickable(!swiper!.isBeginning);
      setIsNextButtonClickable(!swiper!.isEnd);

      const handleNextClick = () => {
        swiper!.slideNext();
      };

      const handlePrevClick = () => {
        swiper!.slidePrev();
      };

      const customNextButton = document.getElementById("customNextButton");
      const customPrevButton = document.getElementById("customPrevButton");

      if (customNextButton) {
        customNextButton.addEventListener("click", handleNextClick);
      }

      if (customPrevButton) {
        customPrevButton.addEventListener("click", handlePrevClick);
      }

      // Cleanup function
      return () => {
        if (swiper) {
          swiper.destroy();
        }
      };
    }
  }, []);

  return (
    <div className={style.container}>
      <div className={`swiper-container ${style.container}`} ref={swiperElRef}>
        <div className={`swiper-wrapper ${style.swiperWrapper}`}>
          {comments.map((comment : any, idx : any) => {
            return (
              <div key={idx} className={`swiper-slide ${style.item}`}>
                <img src={comment.arrow} alt="" />
                <div style={{ color: comment.color }} className={style.percentage}>
                  <p className={style.text}>{"%" + comment.percentage + "+"}</p>
                  <p className={style.frame}>افزایش سود مشتری</p>
                </div>
                <h1 className={style.name}>{comment.name}</h1>
                <p className={style.role}>{comment.role}</p>
                <p className={style.discription}>{comment.text}</p>
                <div className={style.video}>
                  <img className={style.img} src={comment.url} alt="" />
                  <img className={style.play} src="Swiper2/Play.png" />
                  <div className={style.length}>
                    <p>{toPersianNumerals("11:23")}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.title}>
        <p className={style.text}>تجربه مدیراین کسب و کاری که به ما اعتماد کردن</p>
        <h1 className={style.title}>
          در مورد <span className={style.span}>متانکست</span> چه میشنویم?
        </h1>
        <div className={style.navigations}>
          <img
            className={style.navBtn}
            id="customNextButton"
            src={isNextButtonClickable ? "Swiper2/Navigation left.png" : "Swiper2/NavigationUnactive left.png"}
            alt=""
            style={{ cursor: isNextButtonClickable ? "pointer" : "not-allowed" }}
          />
          <img className={style.pagination} src={"Swiper2/pagination.png"} alt="" />
          <img
            className={style.navBtn}
            id="customPrevButton"
            src={isPrevButtonClickable ? "Swiper2/Navigation right.png" : "Swiper2/NavigationUnactive right.png"}
            alt=""
            style={{ cursor: isPrevButtonClickable ? "pointer" : "not-allowed" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Swiper2;
