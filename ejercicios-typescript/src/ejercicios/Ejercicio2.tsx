export const Ejercicio2= () => {
    const sumar = (numeros: number[]): number =>{
        let total: number= 0;

        for(let i= 0; i <numeros.length; i++){
            total = total + numeros[i];
        }
        return total;
    }
    return(
        <div>
            <h3>Ejercicio 2</h3>
            <span>El resultado de la suma es:{sumar([10,20,30,40])}</span>
        </div>
    );
};
export default Ejercicio2;