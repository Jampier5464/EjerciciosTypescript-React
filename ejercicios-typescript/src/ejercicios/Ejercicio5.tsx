import {useState} from "react"

export const Ejercicio5 = () => {
    const [acumulador, setAcumulador] = useState<number>(0);
    const incrementar = (): void =>{
        setAcumulador((prev:number) => prev + 5);
    };
    const disminuir = (): void =>{
        setAcumulador((prev: number) => prev - 5);
    };

  return (
    <div>
        <h3>Ejercicio 5</h3>
        <div style={{
            border: "2px solid #68da6c ",
            width: "80px", 
            height: "40px",
            margin: "10px auto",
            display: "flex",
            justifyContent: "center",
            fontSize:"18px",
            fontWeight:"bold"


            }}>
            {acumulador}
        </div>
        <br/>
        <button onClick={incrementar}>+5</button>
        &nbsp;
        <button onClick={disminuir}>-5</button>
    </div>
  );
};
export default Ejercicio5
