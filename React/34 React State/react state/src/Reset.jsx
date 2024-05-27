
import "./Reset.css";
export default function Reset({isActive, toggle}){

    return (
        <>
            <div className="reset-box" style={{backgroundColor:isActive?"aqua":"blueviolet"}} onClick={toggle}></div>
        </>
    )
}