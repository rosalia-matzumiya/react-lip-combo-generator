import { useState } from "react"
import { fetchRandomCombos } from "../api/combos"

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
    <div>
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
        <div>
          {
            combos.map((combo, index) => (
              <div key={index}>
                <h2>{combo.colorFamily} Combo {index + 1}</h2>

                <p>Liner: {combo.liner.brand} – {combo.liner.shade}</p>
                <p>Lipstick: {combo.base.brand} – {combo.base.shade}</p>
                <p>Topper: {combo.topper.brand} – {combo.topper.shade}</p>
              </div>
            ))
          }

        </div>
      )}
    </div>
  );
}
export default ComboGenerator;