import { useState } from "react"

function ComboGenerator() {
  const [combo, setCombo] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateCombo() {

    setLoading(true);
    setCombo(null);
    await new Promise(resolve => setTimeout(resolve, 500));
    const response = await fetch("http://localhost:4000/combos/random");
    const data = await response.json();

    setCombo(data);
    setLoading(false);
  }

  return (
    <div>
      <button onClick={generateCombo} disabled={loading}>
        Generate Lip Combo
      </button>
      {loading && <p>Loading...</p>}
      {
        combo && !loading && (
          <div>
            <h2>{combo.colorFamily} Combo</h2>

            <p>Liner: {combo.liner.brand} – {combo.liner.shade}</p>
            <p>Lipstick: {combo.base.brand} – {combo.base.shade}</p>
            <p>Topper: {combo.topper.brand} – {combo.topper.shade}</p>
          </div>
        )
      }
    </div>
  );
}
export default ComboGenerator;