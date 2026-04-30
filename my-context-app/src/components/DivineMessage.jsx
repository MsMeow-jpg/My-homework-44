import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function DivineMessage() {
  const { theme, divineMessage } = useContext(AppContext);

  return (
    <aside className="divine-message">
      <p className="message-label">Divine Message</p>
      <h3>{theme}</h3>
      <p>{divineMessage}</p>
    </aside>
  );
}

export default DivineMessage;