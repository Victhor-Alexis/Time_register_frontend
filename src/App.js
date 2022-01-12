import Container from "./components/Container";
import { DynimicityProvider } from "./context/useDynimicityContext";
import './global.css'

function App() {
  return (
    <DynimicityProvider>
       <Container/>
    </DynimicityProvider>
  );
}

export default App;
