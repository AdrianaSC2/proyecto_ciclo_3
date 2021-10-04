import './App.css';
import GestionProductos from './pages/GestionProductos';
import GestionVentas from './pages/GestionVentas';
import GestionUsuarios from './pages/GestionUsuarios';

function App() {
  return (
    <div className="App">
      <GestionProductos /> 
      {/* 
      <GestionUsuarios /> 
      <GestionVentas />
      */} 
    </div>
  );
}

export default App;
