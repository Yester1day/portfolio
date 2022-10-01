import s from './Header.module.css';
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={s.header}>
            <Nav/>

        </div>
    );
}

export default Header;