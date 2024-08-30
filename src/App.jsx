import Header from "./components/Header";

function App() {
  // aqui puedo crear funciones, variables, etc, antes del return
  // en el return iran los template o codigo html
  // Estos componentes de React tiene  dos partes
  // - Declaracion de componentes que es todo lo que que contiene la funcion App
  // - return: antes del return puedes escribir cualquier codigo de JS, for, mas funciones, etc, pero dentro del return es limitada esa parte; no se puede usar ni estructuras condicionales, salvo los ternarios
  return (
    // el App.jsx es el componente principal de App.jsx
    /* cuando se coloca llaves, JSX lo a va a tratar como codigo de JS */
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>
    </div>
  );
}

export default App;
