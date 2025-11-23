import "./button.component.css";

export default function Button({ onClick, children, ...config }) {
  return (
    <>
      <button {...config} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
