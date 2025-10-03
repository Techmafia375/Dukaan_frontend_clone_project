export const RevenueCard = ({
    title,
    orderCount,
    amount,
    count


}) =>{
    return<div className = "w-full bg-white rounded shadow-2xl  p-7 flex flex-col justify between">
        <div className = "text-gray-700">
            <div className =  "flex ">
                <div>
                  {title}
                </div>
                <div className = "ml-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>

                
            </div>

            
        </div>
        <div className = "flex justify-between items-center pt-2">
            <div className = "font-semibold text-2xl">
               ₹ {amount}
            </div>
            {orderCount ? <div className = "flex text-blue-400 cursor-pointer underline font-medium">
                <div className = "flex">
                    <div className = "text- #0E7490">
                    {orderCount} order(s) 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>


            </div> :null }
            

        </div>
    </div>
}