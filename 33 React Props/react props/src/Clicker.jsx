export default function Clicker({
    message = "Thanks for clicking👍",
    buttonText = "Click here..",
}) {
    const click = () => {
        alert(message);
    };
    return <button onClick={click}>{buttonText}</button>;
}
