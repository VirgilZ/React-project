import React from "react";
import { useState } from "react";
import "./Calc.css";

export default function Calcul() {
    const [calc, setCalc] = useState(0)
  function handleCalcul() {
    const rangement = JSON.parse(local>Rangement.getItem(""));
    let calc = 0;
    if (rangement) {
      for (let value of rangement) {
        calc = calc + value.lenght *value.width * value.height;
      }
      setCalc(calc)
    }
}
return  (
    <div className="calc">
        <p>{calc} M³</p>
      <button onClick={()=>{handleCalcul()}}>Appuyez ici pour la conversion en M³</button>
    </div>
  );
}