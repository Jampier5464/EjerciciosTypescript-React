export const Ejercicio3 = () => {
    const arreglo: number[] = [5,10,15,20,25,30,35,40,45,50];
    const dividido: number[] = arreglo.map((valor:number) => {
        return valor/5;
    }
    ) ;

return(
    <div>
        <h3>Ejercicio3</h3>
        <p>
            Arreglo: {arreglo.join(",")}
        </p>
        <p>
            Arreglo dividido para 5: {dividido.join(",")}
        </p>
    </div>
);
};
export default Ejercicio3