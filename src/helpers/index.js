// Ventajas de crear un archivo solo de funciones
// - Tener un mejor orden
// - Se puede usar en distintos lugares, sin necesidad de pasarlo por props
const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, meses) => {
    const totalPagar = cantidad + (cantidad * 0.05 * meses);
    return totalPagar;
}

export {
    formatearDinero,
    calcularTotalPagar
};