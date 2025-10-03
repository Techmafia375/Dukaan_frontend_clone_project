export function PayoutCard({
    title,
    orderCount,
    amount,
    count
}){

    return<div className = "bg-[#115589] hover:bg-[#0D6BBA] text-white rounded-md shadow-md w-115 p-6 flex flex-col justify-between ml-0">
        <div className = "flex">
        <div>
        {title}
        </div>
        <div className = "ml-1 cursor-pointer ">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>

            

        </div>
        </div>


        <div>
            <div className = "flex justify-between">
            <div className = "font-semibold text-2xl pt-2 ml-1">
                ₹{amount}
            </div>
            <div>
                {orderCount ? <div>
                    <div className = "flex pt-3 cursor-pointer underline">
                        <div>
                            {orderCount} order(s)
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    

                </div>: null}
                </div>
            </div>

        </div>

        <div className="mt-2">
            <div className="bg-[#0C4A6E] w-full rounded-sm px-3 py-2 text-sm font-medium cursor-pointer">
            Next Payout Date{''}
            <span className="font-normal mb-0">Today, 04:00 PM</span>
        </div>
        </div>


       



        </div>
  
    



}