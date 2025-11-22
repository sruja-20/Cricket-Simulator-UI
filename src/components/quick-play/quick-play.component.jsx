import "./quick-play.component.css";
export default function QuickPlay({ onClick }) {
  return (
    <>
      <div className="quick-play-container" onClick={onClick}>
        Quick Play
      </div>
    </>
  );
}
