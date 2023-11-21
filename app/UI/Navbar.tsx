import style from "./styles/Navbar.module.css"

import Link from "next/link"

const Navbar: React.FC = () => {
    function toPersianNumerals(input: string): string {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

        return input.replace(/\d/g, (match) => persianDigits[+match]);
    }
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <div className={style.logoImage}>
                    <img src="/Navbar/logo.png" />

                </div>
                <div>
                    <h2>متانکست</h2>
                    <p>جا یگاه خود را بهتر کنید</p>
                </div>
            </div>
            <div>
                <ul className={style.list}>
                    <li>صفحه اصلی</li>
                    <li> <img src="/Navbar/arrow-down.png" />سرویس ها</li>
                    <li>قیمت ها</li>
                    <li><img src="/Navbar/arrow-down.png" /><p>بلاگ متانکست</p></li>
                    <li><img src="/Navbar/arrow-down.png" /><p>لینک های مفید</p></li>
                </ul>
            </div>
            <div className={style.dial}>
                <img src="/Navbar/Dial.svg" />
                <div>
                    <p>تماس با ما</p>
                    <h3>{toPersianNumerals("09152663045")}</h3>
                </div>
            </div>
            <Link href="login" className={style.Link}>
                <div className={style.demo}>
                    <img src="/Navbar/presention-chart.png" />
                    <h3>دمو رایگان</h3>
                </div>
            </Link>
            <div className={style.language}>
                <img src="/Navbar/arrow-down.png" />
                <p>En</p>
                <img src="/Navbar/earth.png" />
            </div>
        </div>
    );
};

export default Navbar;