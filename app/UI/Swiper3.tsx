"use client"
import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import articleData from "./API/ArticleData";

import style from "./styles/swiper3.module.css";

const ArticleData = articleData;

interface Article {
  image: string;
  tag: string;
  title: string;
  date: string;
  duration: number;
}

const Swiper3: React.FC = () => {
  const swiperElRef = useRef<HTMLDivElement>(null);
  const [isPrevButtonClickable, setIsPrevButtonClickable] = useState(true);
  const [isNextButtonClickable, setIsNextButtonClickable] = useState(true);



  useEffect(() => {
    let swiper: Swiper | null = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: 500,
        spaceBetween: 50,
        slidesPerView: 3,
      });

      swiper.on("slideChange", () => {
        setIsPrevButtonClickable(!swiper?.isBeginning);
        setIsNextButtonClickable(!swiper?.isEnd);
      });

      setIsPrevButtonClickable(!swiper.isBeginning);
      setIsNextButtonClickable(!swiper.isEnd);

      const handleNextClick = () => {
        swiper?.slideNext();
      };

      const handlePrevClick = () => {
        swiper?.slidePrev();
      };

      const customNextButton2 = document.getElementById("customNextButton2");
      const customPrevButton2 = document.getElementById("customPrevButton2");

      if (customNextButton2) {
        customNextButton2.addEventListener("click", handleNextClick);
      }

      if (customPrevButton2) {
        customPrevButton2.addEventListener("click", handlePrevClick);
      }

      // Cleanup function
      return () => {
        if (swiper) {
          swiper.destroy();
        }
      };
    }
  }, []);

  function toPersianNumerals(input: string): string {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return input.replace(/\d/g, (match) => persianDigits[+match]);
  }

  return (
    <div className={style.container}>
      <p className={style.text1}>با شما در مسیر یادگیری هستیم</p>

      <div className={style.title}>
        <h1>
          جدیدترین <span>مقالات</span>
        </h1>
        <div>
          <img
            className={style.nextBtn}
            id="customPrevButton2"
            src={isPrevButtonClickable ? "Swiper3/Navigation right.png" : "Swiper3/NavigationUnactive right.png"}
            alt=""
            style={{ cursor: isPrevButtonClickable ? "pointer" : "not-allowed" }}
          />
          <img className={style.pagination} src="Swiper3/pagination.png"alt="" />
          <img
            className={style.nextBtn}
            id="customNextButton2"
            src={isNextButtonClickable ? "Swiper3/Navigationleft.png" : "Swiper3/NavigationUnactive left.png"}
            alt=""
            style={{ cursor: isNextButtonClickable ? "pointer" : "not-allowed" }}
          />
        </div>
      </div>
      <div className="swiper-container" ref={swiperElRef}>
        <div className="swiper-wrapper">
          {ArticleData.map((article: any, idx: number) => {


            return (
              <div
                className={`swiper-slide ${style.card}`}
                key={idx}
              >
                <img
                  className={style.articleimg}
                  src={article.image}
                  alt=""
                />
                <img src={article.tag} alt="" />
                <h1 className={style.item}>
                  {article.title}
                </h1>
                <div className={style.date}>
                  <div className={style.time}>
                    <p>
                      {toPersianNumerals(`مدت زمان مطالعه ${article.duration} دقیقه`)}
                    </p>
                    <img
                      className="ml-2"
                      src="Swiper3/clock.png"
                      alt=""
                    />
                  </div>
                  <div className={style.time}>
                    <p>
                      {toPersianNumerals(article.date)}
                    </p>
                    <img
                      src="Swiper3/calendar.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Swiper3;
