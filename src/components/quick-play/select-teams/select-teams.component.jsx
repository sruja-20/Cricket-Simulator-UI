import "./select-teams.component.css";
import TeamSelection from "./team-selection/team-selection.component";
export default function SelectTeams() {
  return (
    <>
      <div className="lay-row gap8">
        <TeamSelection teamName="India"></TeamSelection>
        <TeamSelection teamName="Australia"></TeamSelection>
      </div>
    </>
  );
}
