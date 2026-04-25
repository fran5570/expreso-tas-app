import { QRCodeCanvas } from "qrcode.react";

function QRPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `
  linear-gradient(rgba(15, 23, 42, 0.95), rgba(17, 24, 39, 0.95)),
  url('/WhatsApp Image 2026-04-25 at 16.23.14.jpeg')
`,
        backgroundRepeat: "repeat",
        backgroundSize: "125px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Expreso TAS
      </h1>

      <p style={{ marginBottom: "20px", color: "#ccc" }}>
        Escaneá el QR para ver nuestras sucursales
      </p>

      <div
        style={{
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "12px",
        }}
      >
        <QRCodeCanvas
          value="https://expreso-tas-app.vercel.app/sucursales"
          size={220}
        />
      </div>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#aaa" }}>
        Servicio de logística
      </p>
    </div>
  );
}

export default QRPage;