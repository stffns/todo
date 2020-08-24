

export class Todo{

    static fromJson({id, tarea, completado, creado}){
        const tempToDO = new Todo(tarea);
        tempToDO.id = id;
        tempToDO.completado = completado;
        tempToDO.creado = creado;

        return tempToDO;

    }

    constructor(tarea) {

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();

    }
}

