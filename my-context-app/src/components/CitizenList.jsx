import { memo, useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

const CitizenList = memo(function CitizenList() {
  const { citizens } = useContext(AppContext);

  return (
    <section className="citizen-section">
      <h3>Important Citizens</h3>

      <div className="citizen-grid">
        {citizens.map((citizen) => (
          <article className="citizen-card" key={citizen.id}>
            <h4>{citizen.name}</h4>
            <p className="role">{citizen.role}</p>
            <p>{citizen.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
});

export default CitizenList;