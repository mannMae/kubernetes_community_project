import { firebaseAuth } from 'libraries/firebase';
import { AppProvider } from 'providers/App';
import { AppRoutes } from 'routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
