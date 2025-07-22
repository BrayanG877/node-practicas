const fs = require("fs");
const readline = require("readline");
const path = "./db.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function loadData() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "[]")
  };
  const data = fs.readFileSync(path);
  return JSON.parse(data);
}

function saveData(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function showMenu() {
  console.log("\n=== CRUD en consola con Node.js ===");
  console.log("1. Crear elemento");
  console.log("2. Listar elementos");
  console.log("3. Actualizar elemento");
  console.log("4. Eliminar elemento");
  console.log("5. Salir\n");

  rl.question("Selecciona una opción: ", handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case "1":
      createItem();
      break;
    case "2":
      listItems();
      break;
    case "3":
      updateItem();
      break;
    case "4":
      deleteItem();
      break;
    case "5":
      rl.close();
      break;
    default:
      console.log("Opción inválida.");
      showMenu();
  }
}

function createItem() {
  rl.question("Ingrese un nombre: ", (name) => {
    const data = loadData();
    const id = Date.now(); // ID único
    data.push({ id, name });
    saveData(data);
    console.log("Elemento creado.");
    showMenu();
  });
}

function listItems() {
  const data = loadData();
  console.log("\n=== Lista de elementos ===");
  data.forEach((item) => {
    console.log(`ID: ${item.id} - Nombre: ${item.name}`);
  });
  showMenu();
}

function updateItem() {
  rl.question("ID del elemento a actualizar: ", (idStr) => {
    const id = parseInt(idStr);
    const data = loadData();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      console.log("Elemento no encontrado.");
      showMenu();
      return;
    }

    rl.question("Nuevo nombre: ", (newName) => {
      data[index].name = newName;
      saveData(data);
      console.log("Elemento actualizado.");
      showMenu();
    });
  });
}

function deleteItem() {
  rl.question("ID del elemento a eliminar: ", (idStr) => {
    const id = parseInt(idStr);
    let data = loadData();
    const newData = data.filter((item) => item.id !== id);
    if (data.length === newData.length) {
      console.log("Elemento no encontrado.");
    } else {
      saveData(newData);
      console.log("Elemento eliminado.");
    }
    showMenu();
  });
}

// Iniciar la app
showMenu();

rl.on("close", () => {
  console.log("Aplicación finalizada.");
  process.exit(0);
});
//ahora el ejercicio pero utilizando clases

class Producto {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

module.exports = Producto;

//importacion de la clase producto
const fs = require("fs");
const Producto = require("./Producto");

//creacion de la clase administradora de la tienda

class Administrador {
  constructor(filePath){
    this.filePath= filePath;
    this.initializeFile();
  }
}

