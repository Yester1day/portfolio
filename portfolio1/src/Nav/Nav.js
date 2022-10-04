import s from './Nav.module.css';

function Nav() {
    return (
        <div className={s.nav}>
           <a className={s.text}  href=''>Main</a>
           <a className={s.text} href=''>Skills</a>
           <a className={s.text} href=''>Projects</a>
           <a className={s.text} href=''>Contacts</a>

        </div>
    );
}

export default Nav;