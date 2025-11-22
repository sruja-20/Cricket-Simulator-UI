import "./home.component.css";
import QuickPlay from "../quick-play/quick-play.component";
import ModalDilog from "../../shared/components/modal-dilog/model-dilog.component";
import { useState } from "react";
import TeamSelection from "../quick-play/select-teams/team-selection/team-selection.component";
import SelectTeams from "../quick-play/select-teams/select-teams.component";

export default function Home() {
  const [isDilogOpen, setIsDilogOpen] = useState(false);
  function openDilog() {
    setIsDilogOpen(true);
  }
  function closeDilog() {
    setIsDilogOpen(false);
  }
  let modalDilog = isDilogOpen ? (
    <ModalDilog
      onClose={closeDilog}
      secondaryAction={"Cancel"}
      primaryAction={"Save"}
      title={"Select teams"}
    >
      <SelectTeams></SelectTeams>
    </ModalDilog>
  ) : (
    <></>
  );
  return (
    <>
      <QuickPlay onClick={openDilog} />
      {modalDilog}
    </>
  );
}
