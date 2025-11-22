import "./model-dilog.component.css";
import Button from "../button/button.component";
export default function ModalDilog({
  children,
  onClose,
  primaryAction,
  secondaryAction,
  title,
}) {
  let actionBtns = (
    <div className="lay-row gap8 lay-align-end-end">
      {secondaryAction ? (
        <Button className="btn secondary" onClick={onClose}>
          {secondaryAction}
        </Button>
      ) : (
        <></>
      )}
      {primaryAction ? (
        <Button className="btn primary" onClick={onClose}>
          {primaryAction}
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
  return (
    <div className="modal-container gap16 lay-column">
      <div className="lay-row lay-align-space-between-center">
        <h2>{title}</h2>
        <div className="lay-row lay-align-center-center">
          <i onClick={onClose} className="fa-solid fa-xmark icon"></i>
        </div>
      </div>
      {children}
      {actionBtns}
    </div>
  );
}
