import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Middlebar from './components/Middlebar';
import Bottombar from './components/Bottombar';
function App() {
  return (
    <div className='bg bg-black text-white w-[100%] h-[100%] flex' >
       <Sidebar></Sidebar>
       <div className='flex flex-col'>
         <Topbar></Topbar>
         <Middlebar></Middlebar>
         <Bottombar></Bottombar>
       </div>
    </div>
  );
}

export default App;
