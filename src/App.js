import './App.css';
import { Navbar,Textform,About,Footer} from './components';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='container my-5'>
        <Textform/>
        </div>
        <About/>

        <Footer/>
     </div>
  );
}

export default App;
