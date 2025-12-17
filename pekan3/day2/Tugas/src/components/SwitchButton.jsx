import useToggle from "../hooks/useToggle";

function SwitchButton() {
  const [isOn, toggleOn] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOn}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default SwitchButton;
