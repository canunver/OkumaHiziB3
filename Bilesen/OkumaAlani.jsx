import React, { Component } from "react";
import AracCubugu from "../Kontroller/AracCubugu";
import SecimKutusu from "../Kontroller/SecimKutusu";
import YaziAlani from "./YaziAlani";
import Gosterge from "../Kontroller/Gosterge";
import "./OkumaAlani.css";

class OkumaAlani extends Component {
  state = {
    secKelimeTur: "Kelime",
  };

  KelimeTurleri = () => {
    var dizi = new Array();
    dizi.push({
      value: "Kelime",
      text: this.props.uygulama.MetinOku("Kelime"),
    });
    dizi.push({
      value: "SF",
      text: this.props.uygulama.MetinOku("Sonu Farklı"),
    });
    dizi.push({
      value: "IF",
      text: this.props.uygulama.MetinOku("İlki Farklı"),
    });
    if (this.props.uygulama.state.UygulamaDili == "tr")
      dizi.push({
        value: "Ekli",
        text: this.props.uygulama.MetinOku("Ekli Kelime"),
      });
    dizi.push({
      value: "KH",
      text: this.props.uygulama.MetinOku("Karışan Harfler"),
    });
    dizi.push({
      value: "Hafiza",
      text: this.props.uygulama.MetinOku("Hafıza"),
    });
    if (this.props.uygulama.state.UygulamaDili == "tr")
      dizi.push({
        value: "Hece",
        text: this.props.uygulama.MetinOku("Heceler"),
      });
    return dizi;
  };

  onChange = (id, e) => {
    this.setState({ secKelimeTur: e.target.value });
  };

  onClick = (id, e) => {
    if (id === "gstDevam") this.props.uygulama.OyundaYap(false);
    else this.props.uygulama.OyundaYap(true);
  };

  render() {
    return (
      <React.Fragment>
        <YaziAlani uygulama={this.props.uygulama} />
        <AracCubugu arkaRenk="white" height="29px" marginTop="2px">
          <Gosterge metin="000" left="10px" yaziRenk="#151B54" />
          <Gosterge metin="000" left="72px" yaziRenk="#151B54" />
          {this.props.uygulama.state.oyunda ? (
            <Gosterge
              id="gstDevam"
              metin={this.props.uygulama.MetinOku("DEVAM")}
              left="200px"
              yaziRenk="red"
              width="97px"
              onClick={this.onClick}
            />
          ) : (
            ""
          )}
        </AracCubugu>
        <AracCubugu arkaRenk="white" height="33px" marginTop="2px">
          <Gosterge
            arkaRenk="white"
            metin={this.props.uygulama.MetinOku("Kelime Tür") + ":"}
            left="10px"
            yaziRenk="black"
            width="140px"
            textAlign="left"
            position="relative"
          />
          <SecimKutusu
            id="skKelimeTur"
            value={this.state.secKelimeTur}
            etiket=""
            height="30px"
            liste={this.KelimeTurleri()}
            etiketGenislik="0px"
            onChange={this.onChange}
            position="relative"
            className="SecimKutusuBuyuk"
            kontrolGenislik="190px"
            ayniSatir
          />
          {!this.props.uygulama.state.oyunda ? (
            <Gosterge
              id="gstBasla"
              metin={this.props.uygulama.MetinOku("BAŞLA")}
              left="30px"
              yaziRenk="red"
              width="97px"
              position="relative"
              onClick={this.onClick}
            />
          ) : (
            ""
          )}
        </AracCubugu>
      </React.Fragment>
    );
  }
}

export default OkumaAlani;
