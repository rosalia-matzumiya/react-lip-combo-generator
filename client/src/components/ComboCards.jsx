function ComboCard({ combo, index }) {
  return (
    <div className="combo-card">
      <h2>{combo.colorFamily} Combo {index + 1}</h2>

      <p>Liner: {combo.liner.brand} – {combo.liner.shade}</p>
      <p>Lipstick: {combo.base.brand} – {combo.base.shade}</p>
      <p>Topper: {combo.topper.brand} – {combo.topper.shade}</p>
    </div>

  );
}

export default ComboCard;