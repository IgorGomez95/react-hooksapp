const ACTION_AGREGAR = 'agregar';

const initialState = [{
    id: 1,
    todo: 'Ir al Gym',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if (action?.type === ACTION_AGREGAR) {
        return [...state, action.payload];
    }
    return state
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Desayunar',
    done: false
};

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, action );
console.log(todos);