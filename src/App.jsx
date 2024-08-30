import {useState, useEffect} from 'react';
// se usa antes del return
import Header from "./components/Header";
import Button from './components/Button';
import { formatearDinero, calcularTotalPagar } from './helpers';

function App() {

  // Tengo que definir el uso de mis hooks fuera del return
  // no se puede colocar la definicion de hook dentro de un if
  // aqui definimos las variables y tenemos un arreglo, es destructuring de un arreglo, el useState nos retorna un arreglo 
  // Primero se le asigna el nombre que deseamos al state
  // Segundo se le asigna la funcion que va a modificar el state, la recomendacion es colocar set seguido del nombre del state
  // Dentro de la funcion useState(valorInicial) se coloca el valor inicial
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  // use effect
  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);
  // esto quiere decir que cuando modifique la cantiddad o los meses, va a realizar una accion dentro de la funcion useEffect
  // cuando tiene un arreglo vacio, se ejecuta solo una vez

  useEffect(() => {
    setPago(total / meses);
  }, [total])
  

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
        <Button 
          operador = '-'
          fn = {handleClickDecremento}
        />
        <Button
          operador = '+'
          fn = {handleClickIncremento}
        />

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
      <p className="text-center  my-10 text-5xl font-extrabold text-indigo-600">{formatearDinero(cantidad)}</p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>Plazo</span> a Pagar
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de pagos</span>
        </h2>
        <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a Pagar</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensuales</p>
      </div>
    </div>  
  );
}

export default App;
