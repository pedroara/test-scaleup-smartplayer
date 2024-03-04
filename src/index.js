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
      src="https://player.scaleup.com.br/embed/c39a428ec72dbec705f7140da444c2faf7357ffe?events=ended,progress,firstplay&seekTo=0&fullscreen=1&controls=1&watermarkText=Pedro Araújo Pinto - 07560191509&watermarkPosition=top-left&watermarkOpacity=0.5&watermarkTime=20&watermarkType=text&"
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
