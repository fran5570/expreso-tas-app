from fastapi import FastAPI

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sucursales = [
    {"id": 1, "nombre": "Adolfo Gonzalez Chaves", "direccion": "Av. pte. Perón 477", "telefono": "02983-15648248"},
    {"id": 2, "nombre": "Ayacucho", "direccion": "Yrigoyen 864", "telefono": "02293-15583656"},
    {"id": 3, "nombre": "Azul", "direccion": "Av. Mitre 242", "telefono": "02281-423318"},
    {"id": 4, "nombre": "Bahía Blanca", "direccion": "Ruta 3 km 696", "telefono": "0291-4846026"},
    {"id": 5, "nombre": "Balcarce", "direccion": "av jose de san martin calle 109 & 111", "telefono": "02266-421597"},
    {"id": 6, "nombre": "Benito Juarez", "direccion": "Av. Constitución 315", "telefono": "02281-406000/02"},
    {"id": 7, "nombre": "Bolívar", "direccion": "Av. Fabres García & Las Heras", "telefono": "02314-420300"},
    {"id": 8, "nombre": "Buenos Aires", "direccion": "J. Rabanal 3159", "telefono": "011-49180428"},
    {"id": 9, "nombre": "Chillar", "direccion": "Est. Serv. Los Cerros Ruta 3", "telefono": "02281-497185"},
    {"id": 10, "nombre": "Chivilcoy", "direccion": "Av. 22 de Octubre 420", "telefono": "02346-421548"},
    {"id": 11, "nombre": "Cnel. Pringles", "direccion": "Sáenz Peña 843", "telefono": "02922-462721"},
    {"id": 12, "nombre": "Cnel. Suarez", "direccion": "Av. San Martín 178", "telefono": "02926-431535"},
    {"id": 13, "nombre": "Gral. Lamadrid", "direccion": "Belgrano 962", "telefono": "02286-471069"},
    {"id": 14, "nombre": "Junín", "direccion": "Avellaneda 966", "telefono": "0236-4425690"},
    {"id": 15, "nombre": "La Plata", "direccion": "Av. 19 Nº 38", "telefono": "0221-4897345"},
    {"id": 16, "nombre": "Mar del Plata", "direccion": "Av. J.B. Justo 3953", "telefono": "0223-4731793"},
    {"id": 17, "nombre": "Necochea", "direccion": "Calle 72 Nº 2772", "telefono": "02262-436253"},
    {"id": 18, "nombre": "9 de Julio", "direccion": "Álvarez 969", "telefono": "02317-430368"},
    {"id": 19, "nombre": "Olavarría", "direccion": "Pellegrino 1896", "telefono": "02284-421247"},
    {"id": 20, "nombre": "Pehuajó", "direccion": "Av. Mitre y Chile", "telefono": "02396-479784"},
    {"id": 21, "nombre": "Pigüé", "direccion": "Ciudad de Rodez 250", "telefono": "02923-474324"},
    {"id": 22, "nombre": "Rosario", "direccion": "Av. Perón 6615", "telefono": "0341-4221053"},
    {"id": 23, "nombre": "Saladillo", "direccion": "Sojo 3119", "telefono": "02344-453714"},
    {"id": 24, "nombre": "San Cayetano", "direccion": "Belgrano 236", "telefono": "02983-15613066"},
    {"id": 25, "nombre": "Tandil", "direccion": "Col. Pugliese y Ribas", "telefono": "02293-422644"},
    {"id": 26, "nombre": "Trenque Lauquen", "direccion": "Pte. Perón 1217", "telefono": "02392-422002"},
    {"id": 27, "nombre": "Tres Arroyos", "direccion": "Ruta 3 y Sadi Carnot", "telefono": "02983-429032"}
]

@app.get("/")
def home():
    return {"mensaje": "Backend funcionando"}

@app.get("/sucursales")
def get_sucursales():
    return sucursales