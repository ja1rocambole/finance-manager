import { StyledCardTransition } from "./Components/CardTransition/style";
import { Header } from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main>
          <div>
            <form>FORMULARIO</form>
            <div>TOTAL</div>
          </div>

          <div>
            <ul>
              FINANCE LIST
              <StyledCardTransition
                description="descrição"
                type="outflow"
                uuid="isso é um uuid"
                value="R$ 3.300,00"
              />
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
