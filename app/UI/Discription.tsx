import style from "./Styles/Discription.module.css"

const Discription : React.FC = () => {
    return (
        <div className={style.container}>
            <h3>
                سیستم <span>CRM</span> متانکست
            </h3>
            <h1>
                یک پلتفرم برای تمامی نیاز ها کسب و کار
            </h1>
            <p>
                سی ار ام یک سیستم نرم افزاری است که به صاحبان کسب و کار کمک میکند تا به راحتی تمام ارتباطات را ردیابی کند و روابط را با سرنخ ها وت مشتریان خود تقویت کند.سی ار ام جایگزین تعداد زیادی از صفحات گسترده ، پایگاه های داده و برنامه هایی است که بسیاری از کسب و کار ها برای ردیابی داده های مشتری با هم وصله میکنند.نتیجه: سازماندهی ، کارایی ، مدیریت زمان بهتر
            </p>
            <div className= {style.buttonContainer}>
                <img src="Discription/Vector.svg" className={style.vector}  />
                <div className={style.button}><p>رایگان شروع کنید</p> <img src="/Discription/arrow-left.png" /></div>
                <img src="Discription/Vector.svg" className={style.vector} />
            </div>
            <img className={style.line} src="Discription/Vector (1).png"/>
            <img className={style.eclipse} src="/Discription/Ellipse 361.png"/>
            <img className={style.round} src="/Discription/Ellipse 363.png"/>
            <img className={style.Pround} src="/Discription/Ellipse 364.png"/>
            <img className={style.Ground} src="/Discription/Ellipse 362.png"/>
        </div>
    );
};

export default Discription;