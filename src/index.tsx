import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <div
    style={{
      height: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.5rem",
      textAlign: "center",
      background: "#fff",
      color: "#222",
      padding: "2rem"
    }}
  >
    Uudistamme nettisivuja.
    <br />
    Otathan toistaiseksi yhteyttä suoraan Instagramin kautta
    <b>@saratuononen_photography</b>
  </div>
);
