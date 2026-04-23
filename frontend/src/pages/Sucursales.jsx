import { useEffect, useState } from "react";

function Sucursales() {
  const [sucursales, setSucursales] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://192.168.101.14:8000/sucursales")
      .then((res) => res.json())
      .then((data) => setSucursales(data))
      .catch((err) => console.error(err));
  }, []);

  // FILTRO
  const filtered = sucursales.filter((s) =>
    `${s.nombre} ${s.direccion}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "32px" }}>
        Expreso TAS
      </h1>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar sucursal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #333",
          background: "#1e293b",
          color: "white",
        }}
      />

      {/* GRID 2 COLUMNAS */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {filtered.map((s) => {
          // LIMPIAR TELÉFONO
          const phone = s.telefono.replace(/\D/g, "");

          return (
            <div
              key={s.id}
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>{s.nombre}</h3>

              <p style={{ color: "#aaa" }}>{s.direccion}</p>

              <p>{s.telefono}</p>

              {/* BOTONES */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <a
                  href={`tel:${phone}`}
                  style={{ color: "#22c55e" }}
                >
                  📞 Llamar
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    s.direccion
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#3b82f6" }}
                >
                  📍 Mapa
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sucursales;