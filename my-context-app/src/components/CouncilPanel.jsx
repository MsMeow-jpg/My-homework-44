import CitizenList from "./CitizenList";
import DivineMessage from "./DivineMessage";

function CouncilPanel() {
  return (
    <section className="council-panel">
      <div className="panel-intro">
        <h2>Royal Council Report</h2>
        <p>
          The city is technically functioning, which is more than anyone
          expected before breakfast.
        </p>
      </div>

      <CitizenList />
      <DivineMessage />
    </section>
  );
}

export default CouncilPanel;