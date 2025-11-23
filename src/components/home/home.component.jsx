import "./home.component.css";
import QuickPlay from "../quick-play/quick-play.component";
import AddTeams from "../add-teams/add-teams.component";
import MatchList from "../match-list/match-list.component";

export default function Home() {
  return (
    <>
      <div className="home-container ht-100 lay-column gap8">
        <div className="lay-row gap8 lay-align-end-end">
          <QuickPlay />
          <AddTeams />
        </div>
        <div className="layrow matches-container">
          <MatchList></MatchList>
        </div>
      </div>
    </>
  );
}
