import React from "react";
const flex = {
  display: "flex",
  flexDirection: "row",
  margin: "20vh auto 10vh auto ",
  textAlign: "center",
};

const fontStyle = {
  color: "red",
  fontSize: "10vh",
};

export default function Error404() {
  return (
    <div style={flex}>
      <h1 style={fontStyle}>Error 404! La página solicitada no existe</h1>
    </div>
  );
}
