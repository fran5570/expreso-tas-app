import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

function Sucursales() {
  const [sucursales, setSucursales] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://expreso-tas-app.onrender.com/sucursales")
      .then((res) => res.json())
      .then((data) => setSucursales(data))
      .catch((err) => console.error(err));

    fetch("https://expreso-tas-app.onrender.com/visita", {
    method: "POST",
  });
  }, []);

    

  // FILTRO
  const filtered = sucursales.filter((s) =>
    `${s.nombre} ${s.direccion}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // PDF
  const descargarPDF = () => {
    const pdf = new jsPDF();

    // TÍTULO
    pdf.setFontSize(18);
    pdf.text("Expreso TAS - Sucursales", 10, 15);

    let y = 25;

    filtered.forEach((s) => {
      // NOMBRE
      pdf.setFontSize(14);
      pdf.text(s.nombre, 10, y);
      y += 6;

      // DIRECCIÓN
      pdf.setFontSize(11);
      pdf.text(s.direccion, 10, y);
      y += 6;

      // TELÉFONO
      pdf.text(`Tel: ${s.telefono}`, 10, y);
      y += 10;

      // SALTO DE PÁGINA
      if (y > 280) {
        pdf.addPage();
        y = 15;
      }
    });

    pdf.save("sucursales-expreso-tas.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `
  linear-gradient(rgba(15, 23, 42, 0.80), rgba(17, 24, 39, 0.80)),
  url('/WhatsApp Image 2026-04-25 at 16.23.14.jpeg')
`,
backgroundRepeat: "repeat",
backgroundSize: "100px",
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

      {/* BOTÓN PDF */}
      <button
        onClick={descargarPDF}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "#22c55e",
          color: "white",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        📄 Descargar PDF
      </button>

      {/* CONTENIDO PDF */}
      <div id="contenidoPDF">
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {filtered.map((s) => {
            const phone = s.telefono.replace(/\D/g, "");

            return (
              <div
                key={s.id}
                style={{
                  background: "#1e293b",
                  padding: "18px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* IZQUIERDA */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <div
                    style={{
                      background: "#0f172a",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  >
                    🏪
                  </div>

                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
                      {s.nombre}
                    </h3>

                    <p style={{ color: "#aaa", fontSize: "14px", margin: "4px 0" }}>
                      📍 {s.direccion}
                    </p>

                    <p style={{ fontSize: "15px", margin: 0 }}>
                      📞 {s.telefono}
                    </p>
                  </div>
                </div>

                {/* DERECHA BOTONES */}
                <div style={{ display: "flex", gap: "10px" }}>
                  <a
                    href={`tel:${phone}`}
                    style={{
                      background: "#22c55e",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Llamar
                  </a>

                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      s.direccion + ", " + s.nombre + ", Buenos Aires, Argentina"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#3b82f6",
                      padding: "8px 12px",
                      borderRadius: "10px",
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Mapa
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "12px",
          color: "#888",
        }}
      >
        Desarrollado por Francisco Pérez ·{" "}
        <a
          href="https://github.com/fran5570"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#3b82f6" }}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Sucursales;