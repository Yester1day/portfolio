import s from './Contacts.module.css';

function Contacts() {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <h5> Contacts </h5>
                <div>
                    <div>
                        <a href='tel:+79998887766'>+375(33)328-13-91</a>
                    </div>

                    <div className="badge-base LI-profile-badge" data-locale="ru_RU" data-size="medium"
                         data-theme="dark" data-type="VERTICAL" data-vanity="dmitry-avchinnik-601a46252"
                         data-version="v1"><a className="badge-base__link LI-simple-link"
                                              href="https://by.linkedin.com/in/dmitry-avchinnik-601a46252?trk=profile-badge">My
                        LinkedIn</a>
                    </div>
                    <div>
                        <a href="mailto:dima1999by@mail.ru">My mail</a>
                    </div>


                </div>


            </div>
            {/*<GoogleApiWrapper/>*/}

        </div>
    );
}

export default Contacts;