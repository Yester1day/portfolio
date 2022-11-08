import s from './Nav.module.css';

function Nav() {
    return (
        <div className={s.nav}>
           <a className={s.text}  href='#main'>Main</a>
           <a className={s.text} href='#skills'>Skills</a>
           <a className={s.text} href='#project'>Projects</a>
           <a className={s.text} href='#contacts'>Contacts</a>

        </div>
    );
}

export default Nav;