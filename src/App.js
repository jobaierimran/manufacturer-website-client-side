import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <h2 className='text-3xl text-green-500'>Hello Medi Tools</h2>
      <button class="btn btn-primary">Button</button>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
