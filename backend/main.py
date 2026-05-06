import sqlite3
from fastapi import FastAPI

app = FastAPI()

def init_db():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS visitas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()

init_db()


from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sucursales = [
    {"id": 1, "nombre": "Adolfo Gonzalez Chaves", "direccion": "Lavalle 730", "telefono": "02823-15648248"},
    {"id": 2, "nombre": "Ayacucho", "direccion": "Murgier 2019", "telefono": "249-4507257"},
    {"id": 3, "nombre": "Azul", "direccion": "Av. Mitre 242", "telefono": "02281-15413703"},
    {"id": 4, "nombre": "Bahía Blanca", "direccion": "Don Bosco 2291", "telefono": "02284-377061"},
    {"id": 5, "nombre": "Balcarce", "direccion": "av jose de san martin calle 109 y 111", "telefono": "02266-15661244"},
    {"id": 6, "nombre": "Benito Juarez", "direccion": "Av. Constitución 315", "telefono": "02292-451658"},
    {"id": 7, "nombre": "Bolívar", "direccion": "Av. Fabres García & Las Heras", "telefono": "02314-420300"},
    {"id": 8, "nombre": "Buenos Aires", "direccion": "J. Rabanal 3159", "telefono": "011-55080785"},
    {"id": 9, "nombre": "Chillar", "direccion": "25 de mayo 861", "telefono": "02281-406002"},
    {"id": 10, "nombre": "Chivilcoy", "direccion": "Alejandro Mathus 565", "telefono": "02346-680400"},
    {"id": 11, "nombre": "Cnel. Pringles", "direccion": "Jose Hernandez 1071", "telefono": "02922-465000"},
    {"id": 12, "nombre": "Cnel. Suarez", "direccion": "Av. San Martín 178", "telefono": "02926-431535"},
    {"id": 13, "nombre": "Gral. Lamadrid", "direccion": "Belgrano 915", "telefono": "2922-432776"},
    {"id": 14, "nombre": "Junín", "direccion": "Avellaneda 966", "telefono": "0364-425690"},
    {"id": 15, "nombre": "La Plata", "direccion": "Av. 19 Nº 538", "telefono": "0221-4879345"},
    {"id": 16, "nombre": "Mar del Plata", "direccion": "Av. Juan B. Justo 3953", "telefono": "0223-4731773"},
    {"id": 17, "nombre": "Necochea", "direccion": "Calle 72 Nº 2772", "telefono": "02262-245294"},
    {"id": 18, "nombre": "9 de Julio", "direccion": "Av. Agustin Álvarez 969", "telefono": "02317-610368"},
    {"id": 19, "nombre": "Olavarría", "direccion": " Antonio Pelegrino 1869", "telefono": "02284-305871"},
    {"id": 20, "nombre": "Pehuajó", "direccion": "A. Mitre 105", "telefono": "02396-479784"},
    {"id": 21, "nombre": "Pigüé", "direccion": "Blvd. Pueyrredon 366", "telefono": "029231-474324"},
    {"id": 22, "nombre": "Rosario", "direccion": "Av. Pres. Perón 6514", "telefono": "0341-3841862"},
    {"id": 23, "nombre": "Saladillo", "direccion": "Leandro Alem 3051", "telefono": "02344-453714"},
    {"id": 24, "nombre": "San Cayetano", "direccion": "Belgrano 236", "telefono": "02983-15613066"},
    {"id": 25, "nombre": "Tandil", "direccion": "Ugalde 981", "telefono": "0249-154639841"},
    {"id": 26, "nombre": "Trenque Lauquen", "direccion": "Av. Garcia Salinas 2154", "telefono": "02392-422002"},
    {"id": 27, "nombre": "Tres Arroyos", "direccion": "Jose ingenieros 936", "telefono": "02983-348660"}
]

@app.get("/")
def home():
    return {"mensaje": "Backend funcionando"}

@app.get("/sucursales")
def get_sucursales():
    return sucursales

@app.post("/visita")
def registrar_visita():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("INSERT INTO visitas DEFAULT VALUES")

    conn.commit()
    conn.close()

    return {"mensaje": "ok"}


@app.get("/visita")
def obtener_visitas():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM visitas")
    total = cursor.fetchone()[0]

    conn.close()

    return {"total": total}