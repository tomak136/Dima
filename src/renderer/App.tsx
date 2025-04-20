import { MemoryRouter as Router, Routes, Route } from 'react-router';
import icon from '../../assets/icon.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<AddProduct />} />
          <Route path="Products" element={<Products />} />
          <Route path="/Products/add-product" element={<AddProduct />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
