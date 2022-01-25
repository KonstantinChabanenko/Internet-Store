import './App.css';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

function App() {
  const theme = createTheme({
    colors: {
      white: '#fff',
      black: '#000',
      grey1: '#ccc',
      grey2: '#eee',
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:cgid" element={<Products />} />
          </Routes>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
