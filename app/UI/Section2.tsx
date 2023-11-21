import style from "./styles/Section2.module.css"

const Section2 : React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.front}>
                <img className={style.metanext} src="Section2/MetaNext.png" />
                <img src="Section2/tablet.png" className={style.tablet} />
                <div>
                    <img src="Section2/calculater.png" className={style.calculater} />
                    <img src="Section2/search.png" className={style.search} />
                    <img src="Section2/chat.png" className={style.chat} />
                    <img src="Section2/managment.png" className={style.managment} />
                    <img src="Section2/app.png" className={style.app} />
                </div>
            </div>
                
                    <img className={style.back1} src="Section2/sec2back.png" />
                    <img className={style.back2} src="Section2/sec2back.png" />
                

        </div>
    );
};

export default Section2;