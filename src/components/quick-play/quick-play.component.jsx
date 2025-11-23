import Button from "../../shared/components/button/button.component";
import "./quick-play.component.css";
export default function QuickPlay({ onClick }) {
  return (
    <>
      <Button className="btn primary" onClick={onClick}>
        Quick Play
      </Button>
    </>
  );
}
