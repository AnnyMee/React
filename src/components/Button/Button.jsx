import "./styles.css";

function Button() {
const sendButtonName = "Send";
const getButtonName = "Get";
const isGetButton = true;

    return <button className="main-button">{isGetButton ? getButtonName : sendButtonName} data</button>
}

export default Button;