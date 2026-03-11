import { useState } from "react"

function App() {
  const [combo, setCombo] = useState(null)

  async function generateCombo() {
    const response = await fetch("http://localhost:4000/combos/random")
    const data = await response.json()

    setCombo(data)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Lip Combo Generator</h1>
      <button onClick={generateCombo}>
        Generate Lip Combo
      </button>
      {
        combo && (
          <div>
            <h2>{combo.colorFamily} Combo</h2>

            <p>Liner: {combo.liner.brand} – {combo.liner.shade}</p>
            <p>Lipstick: {combo.base.brand} – {combo.base.shade}</p>
            <p>Topper: {combo.topper.brand} – {combo.topper.shade}</p>
          </div>
        )
      }
    </div>
  )
}

export default App