const express = require('express');
const app = express();
app.use(express.json());

// ====================================
//   CRUD USUARIOS
// ====================================

// Obtener todos
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Obtener 1
app.get('/usuarios/:id', (req, res) => {
  const u = usuarios.find(x => x.id == req.params.id);
  u ? res.json(u) : res.status(404).json({ error: "No encontrado" });
});

// Crear
app.post('/usuarios', (req, res) => {
  const nuevo = { id: Date.now(), ...req.body };
  usuarios.push(nuevo);
  res.json(nuevo);
});

// Actualizar
app.put('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(x => x.id == req.params.id);
  if (index < 0) return res.status(404).json({ error: "No encontrado" });

  usuarios[index] = { ...usuarios[index], ...req.body };
  res.json(usuarios[index]);
});

// Eliminar
app.delete('/usuarios/:id', (req, res) => {
  usuarios = usuarios.filter(x => x.id != req.params.id);
  res.json({ mensaje: "Usuario eliminado" });
});


// ====================================
//   CRUD PRODUCTOS
// ====================================

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.get('/productos/:id', (req, res) => {
  const p = productos.find(x => x.id == req.params.id);
  p ? res.json(p) : res.status(404).json({ error: "No encontrado" });
});

app.post('/productos', (req, res) => {
  const nuevo = { id: Date.now(), ...req.body };
  productos.push(nuevo);
  res.json(nuevo);
});

app.put('/productos/:id', (req, res) => {
  const index = productos.findIndex(x => x.id == req.params.id);
  if (index < 0) return res.status(404).json({ error: "No encontrado" });

  productos[index] = { ...productos[index], ...req.body };
  res.json(productos[index]);
});

app.delete('/productos/:id', (req, res) => {
  productos = productos.filter(x => x.id != req.params.id);
  res.json({ mensaje: "Producto eliminado" });
});


// ====================================
//   CRUD ORDENES
// ====================================

app.get('/ordenes', (req, res) => {
  res.json(ordenes);
});

app.get('/ordenes/:id', (req, res) => {
  const o = ordenes.find(x => x.id == req.params.id);
  o ? res.json(o) : res.status(404).json({ error: "No encontrado" });
});

app.post('/ordenes', (req, res) => {
  const nueva = { id: Date.now(), ...req.body };
  ordenes.push(nueva);
  res.json(nueva);
});

app.put('/ordenes/:id', (req, res) => {
  const index = ordenes.findIndex(x => x.id == req.params.id);
  if (index < 0) return res.status(404).json({ error: "No encontrado" });

  ordenes[index] = { ...ordenes[index], ...req.body };
  res.json(ordenes[index]);
});

app.delete('/ordenes/:id', (req, res) => {
  ordenes = ordenes.filter(x => x.id != req.params.id);
  res.json({ mensaje: "Orden eliminada" });
});


// ====================================
//   SERVIDOR
// ====================================
app.listen(5000, () => console.log("Servidor ejecutándose en puerto 5000"));
