import Project from "./Project/Project";
import s from "./MyProj.module.css";


function MyProj(props) {
    return (
        <div className={s.projBlock}>
            <div className={s.projectContainer}>
                <h4 className={s.title}>My Projects</h4>
                <div className={s.project}>
                    <Project name={'Todolist'} description={'This Todolist will help you for not to forget your affairs'}/>
                    <Project name={'Social net'} description={'This is my social network, was making for you'}/>
                </div>
            </div>

        </div>

    )


};

export default MyProj;