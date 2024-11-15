
import "./Contactbox.css";
export default function Contactbox({ array }) {

    return (
        <div className="contactbox">
            {array.map((params) =>
                <div className="info-box col-lg-6 col-md-5 col-sm-10 col-10">
                    <i className={`${params.icon}`}></i>
                    <div className="info"> 
                        <h3>{params.title}</h3>
                        <p>{params.information}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
