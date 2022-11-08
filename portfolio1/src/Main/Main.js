import s from './Main.module.css';
import style from './../common/styles/Container.module.css';

function Main() {
    return (


        <div  id='main' className={s.mainBlock}>
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
                    <img alt='foto' src='https://sun9-21.userapi.com/s/v1/ig2/HB43DDox5yI5TfveGhLTzxr18OOCHwIpOEJ7s4wmOwegYUXkj8SlMb8UV5KdrsVYKAJhxrlfKPoWur9pUIcQ4oId.jpg?size=200x200&quality=96&crop=349,4,1859,1859&ava=1'/>

                </div>
            </div>


        </div>
    )
        ;
}

export default Main;