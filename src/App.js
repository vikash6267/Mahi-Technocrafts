import './App.css';
import Navbar from './components/common/Navbar';
import Whatsapp from './components/common/Whatsapp';
import Loader from './components/Loader';

function App() {
  
  return (
    <div className="min-h-screen w-screen">
      {/* <Loader/> */}

<Navbar />
    <div className="fixed bottom-8 md:right-10 right-4">
    <Whatsapp />

      </div>
     
    </div>
  );
}

export default App;
