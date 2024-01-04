import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../../context/GlobalState';

function ExpenseChart() {

  const {transactions} = useGlobalState();

  const totalIncome = transactions.filter((transaction) => transaction.amount > 0).reduce((acc,transaction)=>(acc+=transaction.amount),0);

  const totalExpense = transactions.filter((transaction) => transaction.amount < 0).reduce((acc,transaction)=>(acc+=transaction.amount),0)*-1;

  const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);
  const totalIncomesPercentage = 100 - totalExpensesPercentage;

  console.log(totalExpensesPercentage);
  console.log(totalIncomesPercentage);

  return (
    <VictoryPie
      colorScale={["#e74c3c","#2ecc71"]}
      data={[
        {x: "Expenses", y: totalExpensesPercentage},
        {x: "Incomes", y: totalIncomesPercentage}
      ]}
      animate={{
        duration: 2000
      }}
      labels={({datum})=> `${datum.y}%`}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "white"
          }}
        />
      }
    />
  )
}

export default ExpenseChart