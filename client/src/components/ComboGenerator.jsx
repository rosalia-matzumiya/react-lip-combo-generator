import { useState } from "react"
import { fetchRandomCombos } from "../api/combos"

function ComboGenerator() {
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function generateCombo() {

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = await fetchRandomCombos();
    setCombos(data.combos);
    setLoading(false);
  }

  return (
    <div>
      <button onClick={generateCombo} disabled={loading}>
        Generate Lip Combo
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