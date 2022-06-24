import GlobalProvider from './Context/GlobalProvider';
import Routes from './Routes/Routes';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
