import React, { Component } from "react";

class YaziAlani extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "220px",
          width: "100%",
          border: "1px solid black",
          textAlign: "center",
          verticalAlign: "middle",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "35px",
        }}
      >
        {this.props.uygulama.MetinOku("Başla Tuşuna Bas")}
      </div>
    );
  }
}

export default YaziAlani;
