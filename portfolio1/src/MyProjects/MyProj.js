import Project from "./Project/Project";
import s from "./MyProj.module.css'"


function MyProj(props) {
    return (
        <div className={s.projBlock}>
            <h4>My Projects</h4>
            <div>
                <Project/>
                <Project/>
            </div>

        </div>

    )


};

export default MyProj;