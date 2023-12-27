import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from './store/reducers/fetchAllUsers';
import './index.css';
import { fetchAddUsers } from './store/reducers/fetchAddUser';

function App() {
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.usersSlice)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
    <div className="App">
      <h1 className='title'>
        Список пользователей
      </h1>
      <form>
        <label htmlFor='name'>
          Имя:
        </label>
        <input id={'name'} onChange={(event)=>{
          setInputOne(event.target.value)
        }} />
        <label htmlFor={'age'}>
          Возраст:
        </label>
        <input id={'age'} onChange={(event)=>{
          setInputTwo(event.target.value)
        }}/>
        <button type='button' onClick={()=>{
          dispatch(fetchAddUsers({name:inputOne, age:inputTwo}))
          dispatch(fetchAllUsers())
        }}>
          Сохранить
        </button>
        <button>
          Сбросить
        </button>
      </form>
      <table class="table table-condensed table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Имя</th>
            <th>возраст</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 ?
              users.map((item) => <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>) : ''
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
