import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { tradingTheme } from './styles/theme';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ThemeProvider theme={tradingTheme}>
      <CssBaseline />
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;