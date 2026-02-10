export default function Ejercicio1(){
    const areaCuadrado = (lado: number): number => {
        return lado*lado;
    };
    const lado: number = 4;
    const area: number= areaCuadrado(lado);
    return(
        <div>
            <h3>Ejercicio 1</h3>
            <p>
                lado:{lado}
            </p>
            <p>
                Area del cuadrado; {area}
            </p>
        </div>
    );
}