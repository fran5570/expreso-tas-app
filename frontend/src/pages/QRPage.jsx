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
        background: "linear-gradient(to bottom, #0f172a, #111827)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        🚛 Expreso TAS
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
          value="http://192.168.101.14:5173/sucursales"
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