import InfoProvider from "./components/context/InfoProvider";
import Container from "./components/Container";

function App() {
  return (
    <>
      <InfoProvider>
        <Container />
      </InfoProvider>
    </>
  );
}

export default App;
