import "./team-selection.component.css";

export default function TeamSelection({ teamName }) {
  return (
    <>
      <div className="lay-column ht-100 team-selection-container">
        <div className="scroll-up lay-column lay-align-center-center wd-100 icon">
          <i className="fa-solid fa-angle-up"></i>
        </div>
        <div className="lay-column lay-align-center-center teams">
          {teamName}
        </div>
        <div className="scroll-down lay-column lay-align-center-center wd-100 icon">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </>
  );
}
