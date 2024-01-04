import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/transactions/TransactionForm";
import { GlobalProvider } from "./context/GlobalState";
import TransactionList from "./components/transactions/TransactionList";
import IncomesExpenses from "./components/IncomesExpenses";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <IncomesExpenses/>
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalProvider>
  )
}

export default App