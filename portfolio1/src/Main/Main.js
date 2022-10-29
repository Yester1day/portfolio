import s from './Main.module.css';
import style from './../common/styles/Container.module.css';

function Main() {
    return (


        <div   className={s.mainBlock}>
            <div className={style.containerCommon}>
                <div className={s.aboutMe}>
                    <span>Hi There</span>
                    <h1>I am Dima</h1>
                    <p>Frontend Developer
                    dalkkfjgndavnklav
                    alkdkvnjkavna
                    alfvnkalvna
                    akjvkavfkja idinvbkjdnvjk kdjnvksdnvks knvksvk wkf kwfkwkfnk wnkwnfknwkfn kw</p>
                </div>
                <div className={s.photo}>
                    <img alt='foto' src='./../photo/photo1639923032.png'/>
                </div>
            </div>


        </div>
    )
        ;
}

export default Main;