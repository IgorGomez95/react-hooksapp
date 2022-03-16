import { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  // TODO: Obtener el contexto de usuario
  // TODO: Extraer el setUser del contexto
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Login Screen</h1>
      <hr/>
      <button
        className='btn btn-primary'
        onClick={() => setUser({
          id: 1,
          name: 'Igor Gómez',
          email: 'gomez.dev95@gmail.com',
        })}
      >
        Login
      </button>
    </div>
  )
}
