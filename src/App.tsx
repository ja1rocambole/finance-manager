import { StyledCardTransition } from "./Components/CardTransition/style";
import { ContainerLeft } from "./Components/ContainerLeft";
import { ContainerRight } from "./Components/ContainerRight";
import { FormInsertTrasition } from "./Components/FormInsertTransition";
import { Header } from "./Components/Header";
import { TotalValues } from "./Components/TotalValues";
import { StyledTitle } from "./fragments/Title/style";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <ContainerLeft />

          <ContainerRight />
        </main>
      </div>
    </>
  );
}

export default App;
