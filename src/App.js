import PicProvider from "./context/PicProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <PicProvider>
      <AppRouter />
    </PicProvider>
  );
}

export default App;
