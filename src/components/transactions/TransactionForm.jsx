import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";


const TransactionForm = () => {

  const { addTransaction } = useGlobalState();
  const [description,setDescription]=useState();
  const [amount,setAmount]=useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount
    });
    console.log(description + " " +  amount);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input type="number" placeholder="00.00" step="0.01"
          onChange={(event)=> setAmount(event.target.value)}
        />
        <button>
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm