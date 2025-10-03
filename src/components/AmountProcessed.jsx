export function AmountProcessed({
    title,
    amount
}){
    return<div className = "bg-white shadow-2xl p-7  flex flex-col justify-between mt-0">
        <div className = "flex">
        <div>
            {title} 
        </div>
        <div className = "ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
        </div>
        </div>

        <div className = "font-semibold text-2xl">
           ₹  {amount}

        </div>
        
        
    </div>
}