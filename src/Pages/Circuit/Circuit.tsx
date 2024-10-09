import React from "react";
import './Circuit.css';
import CircuitArabieSaoudite from "../../Component/Circuit-component/Circuit-arabie-saoudite/Circuit-arabie-saoudite";
import CircuitBahrein from "../../Component/Circuit-component/Circuit-bahrein/Circuit-bahrein";
import CircuitAustralie from "../../Component/Circuit-component/Circuit-australie/Circuit-australie";
import CircuitJapan from "../../Component/Circuit-component/Circuit-japan/Circuit-japan";
import CircuitChina from "../../Component/Circuit-component/Circuit-china/Circuit-china";
import CircuitMiami from "../../Component/Circuit-component/Circuit-miami/Circuit-miami";
import CircuitMonaco from "../../Component/Circuit-component/Circuit-monaco/Circuit-monaco";
import CircuitCanada from "../../Component/Circuit-component/Circuit-canada/Circuit-canada";
import CircuitSpain from "../../Component/Circuit-component/Circuit-spain/Circuit-spain";
import CircuitAutriche from "../../Component/Circuit-component/Circuit-autriche/Circuit-autriche";
import CircuitGb from "../../Component/Circuit-component/Circuit-gb/Circuit-gb";
import CircuitHongrie from "../../Component/Circuit-component/Circuit-hongrie/Circuit-hongrie";
import CircuitBelgium from "../../Component/Circuit-component/Circuit-belgium/Circuit-belgium";
import CircuitNerthlands from "../../Component/Circuit-component/Circuit-nerthlands/Circuit-nerthlands";
import CircuitEmilieRomagne from "../../Component/Circuit-component/Circuit-Emilie-Romagne/Circuit-Emilie-Romagne";
import CircuitItaly from "../../Component/Circuit-component/Circuit-italy/Circuit-italy";
import CircuitBaku from "../../Component/Circuit-component/Circuit-baku/Circuit-baku";
import CircuitSingapour from "../../Component/Circuit-component/Circuit-singapour/Circuit-singapour";

const Circuit: React.FC = () => {
    return (
        <div className="bg">
                <div className="nav">
                    <ul className="nav-list">
                        <li>Circuit</li>
                        <li>Teams</li>
                        <li>Pilotes</li>
                    </ul>
                </div>
                <div className="circuit-component">
                    <CircuitBahrein />
                    <CircuitArabieSaoudite />
                    <CircuitAustralie />
                    <CircuitJapan />
                    <CircuitChina />
                    <CircuitMiami />
                    <CircuitEmilieRomagne />
                    <CircuitMonaco />
                    <CircuitCanada />
                    <CircuitSpain />
                    <CircuitAutriche />
                    <CircuitGb />
                    <CircuitHongrie />
                    <CircuitBelgium />
                    <CircuitNerthlands />
                    <CircuitItaly />
                    <CircuitBaku />
                    <CircuitSingapour />
                </div>
        </div>
    );
}

export default Circuit;