import React from 'react';

//style
import style from "./styles/Footer.module.css"

//imgs
import logo from "Footer/logo.png"
import Dial from "Footer/DialW.png"
import telegram from "Footer/Telegram.png"
import instagram from "Footer/Instagram.png"
import LinkedIn from "Footer/Linked In.png"
import facebook from "Footer/Facebook.png"
import enamad from "Footer/enamad.png"
import calcGreen from "Footer/calcGreen.png"
import calcOrange from "Footer/calcOrange.png"
import calcPink from "Footer/calcPink.png"
import calcPurule from "Footer/calcPurple.png"
import calcRed from "Footer/calcRed.png"
import location from "Footer/location.png"
import DialSmall from "Footer/DialSmall.png"
import Message from "Footer/Message.png"
import demo from "Footer/presention-chart-blue.png"
import background from "Footer/Sec4back.png"
import copyright from "Footer/copyright.png"



const Footer: React.FC = () => {
    function toPersianNumerals(input: string): string {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

        return input.replace(/\d/g, (match) => persianDigits[+match]);
    }
    return (
        <div className={style.container}>
            <div className={style.section1}>
                <div className={style.text}>
                    <img src="Footer/DialW.png" />
                    <div>
                        <h2>تماس با ما</h2>
                        <p>در تمامی روز های هفته 24 ساعته در خدمتیم </p>
                    </div>
                </div>
                <div className={style.number}>
                    <h2>{toPersianNumerals("09152663045")}</h2>
                </div>

            </div>
            <div className={style.section2}>
                <div className={style.logo}>
                    <div className={style.logoImage}>
                        <img src="Footer/logo.png" />
                    </div>
                    <div>
                        <h2>متانکست</h2>
                        <p>جایگاه خود را بهتر کنید</p>
                    </div>
                </div>
                <div className={style.links}>
                    <img src="Footer/Telegram.png" />
                    <img src="Footer/Instagram.png" />
                    <img src="Footer/Linked In.png" />
                    <img src="Footer/Facebook.png" />

                </div>
            </div>
            <div className={style.section3}>
                <div>
                    <h3>متانکست</h3>
                    <ul className={style.metanext}>
                        <li>صفحه اصلی</li>
                        <li>قیمت ها</li>
                        <li>خدمات</li>
                        <li>بلاگ</li>
                        <li>درباره ما</li>
                    </ul>
                </div>
                <div >
                    <h3>خدمات ما</h3>
                    <ul className={style.services}>
                        <li><img src="Footer/calcGreen.png" /><p>حسابداری آنلاین</p></li>
                        <li><img src="Footer/calcOrange.png" /><p>مدیریت نیروی کار</p></li>
                        <li><img src="Footer/calcPink.png" /><p>گفتوگو با مشتریان</p></li>
                        <li><img src="Footer/calcPurple.png" /><p>اپلیکیشن فروشگاهی</p></li>
                        <li><img src="Footer/calcRed.png" /><p>سایت فروش</p></li>
                    </ul>

                </div>
                <div>
                    <h3>خدمات مشتریان</h3>
                    <ul className={style.customersservice}>
                        <li>تماس با ما</li>
                        <li>سوالات متداول</li>
                        <li>همکاری در فروش</li>
                    </ul>
                </div>
                <div>
                    <h3>راه های ارتباطی</h3>
                    <ul className={style.contact}>
                        <li className={style.firstlist}>
                            <div className={style.locationtext}>
                                <img src="Footer/location.png" />
                                <p>آدرس</p>
                            </div>
                            <h4>مشهد بابانظر 77 ، عزیزی 3، پلاک 8</h4>
                        </li>
                        <li className={style.list}>
                            <img src="Footer/DialSmall.png" />
                            <p>شماره تماس</p>
                            <h4 className={style.h4}>{toPersianNumerals("02136160800")}</h4>
                        </li>
                        <li className={style.list}>
                            <img src="Footer/Message.png" />
                            <p>ایمیل</p>
                            <h4 className={style.h4}>Metanext.com</h4>
                        </li>
                    </ul>
                </div>
                <img className={style.enamad} src="Footer/enamad.png" />
            </div>
            <div className={style.section4}>
                <div className={style.demotext}>
                    <h2>دریافت دمو رایگان</h2>
                    <div>
                        <img src="Footer/presention-chart-blue.png" />
                        <p>دمو رایگان</p>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                <div className={style.textc}>
                    <img src="Footer/copyright.png" />
                    <p>تمامی حقوق مادی و معنوی این سایت نزد متانکست محفوظ است و هر گونه کپی برداری پیگرد قانونی دارد</p>
                </div>
                <p>1400-1401</p>
            </div>
        </div>
    );
};

export default Footer;