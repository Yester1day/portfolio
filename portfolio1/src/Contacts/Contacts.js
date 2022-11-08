import s from './Contacts.module.css';

function Contacts() {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <h5> Contacts </h5>
                <div>
                    <div>My LinkedIn</div>
                    <div className="badge-base LI-profile-badge" data-locale="ru_RU" data-size="medium"
                         data-theme="dark" data-type="VERTICAL" data-vanity="dmitry-avchinnik-601a46252"
                         data-version="v1"><a className="badge-base__link LI-simple-link"
                                              href="https://by.linkedin.com/in/dmitry-avchinnik-601a46252?trk=profile-badge">Dmitry
                        Avchinnik</a></div>


                </div>


            </div>
            {/*<GoogleApiWrapper/>*/}

        </div>
    );
}

export default Contacts;