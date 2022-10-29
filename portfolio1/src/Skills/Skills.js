import s from './Skills.module.css';

import Skill from "./Skill/Skill";


function Skills(props) {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}> My Skills</h2>

                <div className={s.skills}>
                    <Skill title={'JS'} description={'ghdfhbvjsdbvjdvjker dhvbjdbv sdvgdj'}/>
                    <Skill title={'CSS'} description={'jdhvbhd skvksdv skbsv skvbskb svksvhb'}/>
                    <Skill title={'React'} description={'skjvbksdbvk skvbksbvks skvbskvb svkskvsk skjvjskvbs skvjskfns skvjfskf'}/>

                </div>

            </div>

        </div>

    )


};

export default Skills;