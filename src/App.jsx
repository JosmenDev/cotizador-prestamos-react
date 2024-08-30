import {useState} from 'react';
// se usa antes del return
import Header from "./components/Header";

function App() {

  // Tengo que definir el uso de mis hooks fuera del return
  // no se puede colocar la definicion de hook dentro de un if
  // aqui definimos las variables y tenemos un arreglo, es destructuring de un arreglo, el useState nos retorna un arreglo 
  // Primero se le asigna el nombre que deseamos al state
  // Segundo se le asigna la funcion que va a modificar el state, la recomendacion es colocar set seguido del nombre del state
  // Dentro de la funcion useState(valorInicial) se coloca el valor inicial
  const [cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // console.log(cantidad);
  // cantidad = 10000

  // defino una funcion

  const handleChange = e => {
    // Con el + se convierte a un valor numerico
    setCantidad(+e.target.value);
    // tengo que asignarle a setCantidad porque este recibe el valor y modifica la cantidad, no se puede modificar directamente.
  }

  const handleClickDecremento = e => {
    const valor = cantidad - STEP;
    if (valor<MIN) {
      alert('Cantidad no válida');
      return;
    }
    setCantidad(valor);
  }

  const handleClickIncremento = e => {
    const valor = cantidad + STEP;
    if (valor>MAX) {
      alert('Cantidad no válida');
      return;
    }
    setCantidad(valor);
  }

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
      <div className='flex justify-between my-6'>
        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickDecremento}
        >-</button>
        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickIncremento}
        >+</button>

      </div>
      <input 
        type="range" 
        name="" 
        id="" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center  my-10 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
    </div>  
  );
}

export default App;
