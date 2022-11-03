import s from './Project.module.css';


function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectContainer}>
                <img className={s.img} src='https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg'/>
                <div className={s.projs}>
                    <h5 className={s.name}>{props.name}</h5>
                    <span className={s.description}>{props.description}</span>
                </div>
            </div>
        </div>
    )

}

export default Project;