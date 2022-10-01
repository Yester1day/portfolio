import s from './Main.module.css';


function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={s.aboutMe}>
                <span>Hi There</span>
                <h1>I am Dima</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>



        </div>
    );
}

export default Main;