import React, { Component } from "react";
import AracCubugu from "../Kontroller/AracCubugu";
import TusMetin from "../Kontroller/TusMetin";
class Baslik extends Component {
  state = {};

  onClick = (id, e) => {
    this.props.uygulama.AyarlarAc(true);
  };
  render() {
    return (
      <AracCubugu ustCizgi altCizgi arkaRenk="navy" yaziRenk="yellow">
        <TusMetin metin="&#9776;" onClick={this.onClick} left="5px" />
        <div style={{ position: "relative", left: "27px" }}>
          {this.props.uygulama.MetinOku("Okuma Hızı")}
        </div>
      </AracCubugu>
    );
  }
}

export default Baslik;
