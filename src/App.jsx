import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionForm from "./components/transactions/TransactionForm";
import { GlobalProvider } from "./context/GlobalState";
import TransactionList from "./components/transactions/TransactionList";
import IncomesExpenses from "./components/IncomesExpenses";
import ExpenseChart from "./components/transactions/ExpenseChart";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-4/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
            <div className="">
              <Header />
              <IncomesExpenses/>
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart/>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App