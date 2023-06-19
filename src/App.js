import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import DataProvider from './DataProvider';
import Router from './AppRoutes';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <DataProvider>
      {/* <ContextProvider> */}
        <Header/>
        <AppRoutes />
        <Footer/>
      {/* </ContextProvider> */}

    </DataProvider>
  );
}

export default App;
