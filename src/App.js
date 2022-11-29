import ContextProvider from "./context/ContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
