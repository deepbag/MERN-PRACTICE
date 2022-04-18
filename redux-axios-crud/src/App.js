import React, {useEffect} from 'react';
import './App.css';
import Action from './redux/action/action';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  const responseData = useSelector(state=>state.reducer.details)

  console.log(responseData);

  useEffect(() => {
    dispatch(Action());
  }, [dispatch])
  

  return (
      <>
        <div className='container'>
          <h3>Hello Redux!</h3>
        </div>
      </>
  );
}

export default App;
