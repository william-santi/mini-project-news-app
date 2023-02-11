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
Nos permitio definir fácilmente los PropTypes, permitiendo que sea mucho más fácil de leer y comprender y verificar los diferentes tipos de datos que usamos en el proyecto.

### Sass
[Sass](https://sass-lang.com/) es el lenguaje de extensión CSS de grado profesional más maduro, estable y potente del mundo.
Nos ayudo a trabajar de manera más dinámica con CSS, usando variables para su reutilización en el código.

### Axios
[Axios](https://axios-http.com/) es un cliente HTTP simple basado en promesas para el navegador y node.js. Axios proporciona una biblioteca fácil de usar en un paquete pequeño con una interfaz muy extensible.

Nos ayudo a realizar de forma más sencilla las peticiones, además de unificar la API para la solicitudes y recibir respuestas fácil de procesar.

### React Router
[React Router](https://reactrouter.com/en/dev/start/overview) es una colección de componentes de navegación la cual podemos usar en web o en móvil con React Native. Con esta librería vamos a obtener un enrutamiento dinámico gracias a los componentes, en otras palabras tenemos unas rutas que renderizan un componente.

Nos ayudo a crear rutas fijas y rutas dinámicas.


