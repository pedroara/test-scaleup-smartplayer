import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log("event", event, "\n\n", "event?.data", event?.data);
    });
    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  return (
    <iframe
      src="https://player.scaleup.com.br/embed/48c6ba5ea33f2f854ffda92294c5cfd18539f451"
      title="Teste"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen=""
      style={{
        width: "100%",
        aspectRatio: "16 / 9",
        border: "0px",
        margin: "0px auto",
      }}
    ></iframe>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
