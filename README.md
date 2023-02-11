# Mini proyecto News App

En la aplicación se está utilizando typescript para el uso de tipados, como también axios para realizar peticiones a la API y para estilos SASS.
El diseño del sitio web fue creado en [Figma](https://www.figma.com/file/wvbC5HuqpsB8QVb2DAFRCu/RPA-MINIPROYECTO-team-library?node-id=447%3A2&t=VRmMZo3NMBB7dijj-0)

## Features
Esta compuesto por 3 páginas
- `/home` - `/` :  Muestra un Slider principal y las listas de noticias principales
- `/categories` :  Muestra la lista de noticias segun su categoría
- `/news`       :  Muestra el detalle de la noticia o artículo seleccionado
- Incluye un buscador global, además de tener un componente `<Header/>` y `<Footer/>`

## News API
```
https://newsapi.org/
```
## Get Started
Primero clonar el repositorio
```
git clone git@github.com:william-santi/mini-project-news-app.git
```

Luego, instalar dependencias
```
npm install
# o
yarn intall
```
Agregar las variables de ambientes y enlace de API, puedes usar el archivo env.template
```
REACT_APP_API_KEY=
```
Y por ultimo ejecutar 
```
npm start
```

## Librerias, componentes o bibliotecas usados

### TypeScript

[TypeScript](https://www.typescriptlang.org/) es un lenguaje de programación fuertemente tipado que se basa en JavaScript, lo que le brinda mejores herramientas a cualquier escala.

En este caso se uso TypeScript 

### React Router


