import { useState } from "react";
import { fetchRandomCombos } from "../api/combos";
import ComboCard from "./ComboCards";
import "./ComboGenerator.css"

function ComboGenerator() {
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [colorFamily, setColorFamily] = useState("");

  function handleColorChange(event) {
    setColorFamily(event.target.value);
  }

  async function generateCombo() {

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = await fetchRandomCombos(colorFamily);
    setCombos(data.combos);
    setLoading(false);
  }

  return (
    <div className="combo-generator">
      <label>Color Family</label>
      <select value={colorFamily} onChange={handleColorChange}>
        <option value="">All</option>
        <option value="nude">Nude</option>
        <option value="brown">Brown</option>
        <option value="red">Red</option>
        <option value="pink">Pink</option>
        <option value="peach">Peach</option>
      </select>
      <button onClick={generateCombo} disabled={loading}>
        Generate Combos
      </button>
      {loading && <p>Loading...</p>}
      {combos.length > 0 && !loading && (
        <div className="combo-grid">
          {
            combos.map((combo, index) => (
              <ComboCard key={index} combo={combo} index={index} />
            ))
          }

        </div>
      )}
    </div>
  );
}
export default ComboGenerator;