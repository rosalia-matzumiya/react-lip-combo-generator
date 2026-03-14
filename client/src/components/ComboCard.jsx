import "./ComboCard.css";
function ComboCard({ combo, index }) {
  return (
    <div className="combo-card">
      <h2 className="combo-title">
        <span className="color-dot"></span>
        {combo.colorFamily} Combo {index + 1}</h2>
      <div className="combo-section">
        <span className="combo-label">Liner</span>
        <p>{combo.liner.brand} – {combo.liner.shade}</p>
      </div>
      <div className="combo-section">
        <span className="combo-label">Lipstick</span>
        <p> {combo.base.brand} – {combo.base.shade}</p>
      </div>
      <div className="combo-section">
        <span className="combo-label">Topper</span>
        <p> {combo.topper.brand} – {combo.topper.shade}</p>
      </div>
    </div>

  );
}

export default ComboCard;