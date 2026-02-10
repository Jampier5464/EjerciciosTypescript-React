import {useState} from "react"

    const Ejercicio5 = () => {
    const [valorContador, setValorContador] = useState<number>(0);

    const cambiarContador = (numero:number) => {
        setValorContador(valorContador + numero);
    };
    return(
        <div>
            <h3>
                Contador: <small>{valorContador}</small>
            </h3>
            <button className="btn btn-primary"onClick={() => cambiarContador(1)}>
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"onClick={() => cambiarContador(-1)}>
                -1
            </button>
        </div>
    )
}
export default Ejercicio5
