# Listado de responsabilidades

## Capa de datos:

- Dogs
- User
- UI

## Mods:

### User

- Logged in
- Logged out
- Delete fav dog
- Create fav dog

### Dogs

- Delete one dog
- Create one dog
- Edit one dog

### UI

- On
- Off

## Componentes

## User Form

- Renderizar inputs username, password e email, en funcion de la ruta.
- Renderizar componente generic button, pasando texto y accion en funcion de la ruta.
- Llamar a la funcion establecida (submit), en funcion de la ruta.

### Dog List

- Renderizar componente dog pasando imagen, texto y boton, dependiendo del estado obtenido.
- Pasar accion a realizar a componente dog, dependiendo del estado obtenido.

### Dog

- Renderizar imagen recibida
- Renderizar texto recibido
- Renderizar boton recibido
- Renderizar icono/boton recibido en funcion de la ruta
- Pasar accion a boton delete button
- Invoca a la funcion navigate al hacer click en la imagen recibida, con id recibido

### Delete Button

- Renderizar icono/boton borrar
- Llamar a la accion recibida

### Generic Button

- Renderizar el texto recibido
- Renderizar icono recibido
- Llamar a la accion recibida
