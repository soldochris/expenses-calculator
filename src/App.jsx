import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hello world</h1>
    </GlobalProvider>
  )
}

export default App