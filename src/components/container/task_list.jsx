import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

    const defaultTask = new Task('Tarea 1', 'descripcion', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div>
                <h1>
                    Tus Tareas:
                </h1>
                {/* TODO: Aplicar un FOR/Map para renderizar una lista */}
                <TaskComponent task={defaultTask}></TaskComponent>
            </div>
        </div>
    );
};



export default TaskListComponent;
