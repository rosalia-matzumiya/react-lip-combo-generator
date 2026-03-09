import { useState } from "react"

const combos = [
  { liner: "MAC Oak", lipstick: "MAC Bombshell" },
  { liner: "MAC Cork", lipstick: "Marc Jacobs Red" },
  { liner: "MAC Whirl", lipstick: "Charlotte Tilbury Pillow Talk" },
]

function App() {

  const [combo, setCombo] = useState(null)

  const generateCombo = () => {
    const random = combos[Math.floor(Math.random() * combos.length)]
    setCombo(random)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Lip Combo Generator</h1>

      <button onClick={generateCombo}>
        Generate Combo
      </button>

      {combo && (
        <div>
          <p>Lip Liner: {combo.liner}</p>
          <p>Lipstick: {combo.lipstick}</p>
        </div>
      )}
    </div>
  )
}

export default App