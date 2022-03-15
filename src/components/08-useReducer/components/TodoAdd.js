import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

  const [ { description }, handleInputChange, reset ] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if( description.trim().length <= 1 ) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          value={ description }
          onChange={ handleInputChange }
        />
        <div className="d-grid mt-2">
          <button className="btn btn-outline-primary" type="submit">Agregar</button>
        </div>
      </form>
    </>
  )
}
