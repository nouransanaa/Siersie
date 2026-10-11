import "./AccommodationFilters.css";

function AccommodationFilters({
  region,
  setRegion,
  city,
  setCity,
  type,
  setType,
  resetFilters,
}) {
  const citiesByRegion = {
    Nord: ["Bizerte", "Tabarka"],
    "Cap Bon": ["Hammamet", "Nabeul"],
    "Grand Tunis": ["Tunis", "Sidi Bou Saïd"],
    Sahel: ["Sousse", "Monastir", "Mahdia"],
    Sud: ["Djerba", "Tataouine"],
    "Sud-Ouest": ["Tozeur"],
  };

  const cities = region
    ? citiesByRegion[region] || []
    : [
        "Tunis",
        "Sidi Bou Saïd",
        "Hammamet",
        "Djerba",
        "Tozeur",
        "Tataouine",
        "Bizerte",
        "Tabarka",
        "Nabeul",
      ];

  return (
    <aside className="filters">

      <h2>Filtrer</h2>

      {/* Région */}
      <div className="filter-group">

        <label>RÉGION</label>

        <select
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setCity("");
          }}
        >
          <option value="">Toutes les régions</option>
          <option value="Nord">Nord</option>
          <option value="Grand Tunis">Grand Tunis</option>
          <option value="Cap Bon">Cap Bon</option>
          <option value="Sahel">Sahel</option>
          <option value="Sud">Sud</option>
          <option value="Sud-Ouest">Sud-Ouest</option>
        </select>

      </div>

      {/* Ville */}
      <div className="filter-group">

        <label>VILLE</label>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="">Toutes les villes</option>

          {cities.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>

      </div>

      {/* Type */}
      <div className="filter-group">

        <label>TYPE D'HÉBERGEMENT</label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Tous les types</option>
          <option value="Auberge">Auberge</option>
          <option value="Gîte">Gîte</option>
          <option value="Maison d'hôtes">
            Maison d'hôtes
          </option>
          <option value="Riad">Riad</option>
          <option value="Dar">Dar</option>
          <option value="Villa">Villa</option>
          <option value="Hôtel">Hôtel</option>
        </select>

      </div>

      {/* Reset */}
      {(region || city || type) && (
        <button
          className="reset-button"
          onClick={resetFilters}
        >
          ↻ Réinitialiser les filtres
        </button>
      )}

    </aside>
  );
}

export default AccommodationFilters;