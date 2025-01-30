'use client';
import useLoanStore from "@/store/loanStore";

export default function LoanComponent(){
const loans = useLoanStore(state=>state.loans);
const addLoan = useLoanStore(state=>state.addLoan);
const removeLoan = useLoanStore(state=>state.removeLoan);

    return(
        <div className="flex h-screen items-center justify-center">
            <h1>Loans</h1>
            <ul>
                {loans.map(loan=>(
                    <li key={loan.id}>
                        {loan.name}
                        <button onClick={()=>removeLoan(loan.id)} className="bg-red-400 text-center text-black">Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={()=>addLoan({id:loans.length,name:`Loan ${loans.length}`})} className="bg-blue-400 text-black">Add Loan</button>
        </div>

    )
}