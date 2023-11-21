import React from 'react';
import style from "./styles/Counseling.module.css"
const Counseling : React.FC = () => {
    return (
        <div className={style.container}>
            <img className={style.call} src="Counseling/Call.png"/>
            <div className={style.info}>
                <div className={style.title}>
                    <div className={style.titletext}>
                        <p>همراه شما هستیم برای یک شروع تازه</p>
                        <h3>دریافت<span> مشاوره رایگان</span></h3>
                    </div>
                        <img src="Counseling/Dial.svg" />
                    
                </div>
                <input placeholder='نام و نام حانوادگی' type='text' />
                <input placeholder='شماره تماس' type='text' />
                <input placeholder='نام شرکت' type='text' />
                <input className={style.subject} placeholder='موضوع' type='text' />
                <button>دریافت مشاوره</button>
            </div>

        </div>
    );
};

export default Counseling;