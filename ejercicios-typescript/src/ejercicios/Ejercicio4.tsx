type Alumno= {
    name: string;
    edad: number;
    calificacion: number;
};
export const Ejercicio4 = () => {
    const alumnos: Alumno[]=[
        {name: "Viviana", edad: 19, calificacion:10},
        {name: "Wendy", edad: 20, calificacion:8},
        {name: "Gerson", edad: 18, calificacion:9},

    ];
    const promedioCalificaciones= (lista:Alumno[]): number =>{
        let suma: number= 0;
        for(let i = 0; i <lista.length; i++){
            suma= suma + lista[i].calificacion;
        }  
        const promedio: number = suma/ lista.length;
        return promedio;
    };
  return (
    <div>
        <h3>Ejercicio 4</h3>
        <p>
            Promedio de calificaciones: {promedioCalificaciones(alumnos)}
        </p>
        <hr/>
        <h4>Listado de alumnos </h4>
        {alumnos.map((a:Alumno, index: number) => (
            <p key={index}>
                Nombre: {a.name} | Edad: {a.edad} | Calificacion: {a.calificacion}
            </p>
        ))}
    </div>
  );
}
export default Ejercicio4;
