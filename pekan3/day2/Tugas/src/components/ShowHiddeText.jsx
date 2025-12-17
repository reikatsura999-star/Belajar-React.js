import useToggle from "../hooks/useToggle";

function Showhiddetext(){
    const [isVisible,toggleVisible] = useToggle(false);

    return(
        <div>
            <button onClick={toggleVisible}>
            {isVisible ? "hide" : "show"}
            </button>
            {isVisible && <p>ini teks yang di sembunyikan</p>}
        </div>
    )
}
export default Showhiddetext;