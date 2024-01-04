import { useGlobalState } from "../context/GlobalState";

const IncomesExpenses = () => {

  const {transactions} = useGlobalState();

  const amounts = transactions.map(transaction => transaction.amount);

  const incomes = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc+=item),0);

  const expenses = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc+=item),0) * -1;

  return (
    <>
      <div>
        <h4>Incomes</h4>
        <p>{incomes}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>{expenses}</p>
      </div>
    </>
  );
};

export default IncomesExpenses;
