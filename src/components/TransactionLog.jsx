import { TransactionSearch } from "./TransactionSearch";
import { orderData } from "./orders"

export function TransactionLog(){

    return<div className = "">
        <div className = "flex justify-between">
     <div className = "ml-10 flex justify-right">
        <TransactionSearch />
    </div>
    <div className = "flex">
        <div className = " p-2 h-10 flex border border-black  mr-5 mt-5 cursor-pointer">
            <div>
            Sort
            </div>
            <div className = "ml-1 font-normal text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-up-icon lucide-arrow-down-up"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/></svg>
            </div>
            

        </div>
        <div className = "border border-black p-2 h-10 w-10 mt-5 mr-5 text-gray-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
            </div>
            </div>

        
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead className = "text-xm font-medium rounded uppercase text-black-400">
        <tr>
            <th  scope = "col" className = "px-6 py-3 ">
                order ID
            </th>
            <th  scope = "col" className = "px-6 py-3 ">
                Status 
            </th>
            <th  scope = "col" className = "px-6 py-3 ">
                Transaction ID 
            </th>
            <th  scope = "col" className = "px-6 py-3 ">
                Refund date 
            </th>
            <th  scope = "col" className = "px-6 py-3 text-right">
                order amount
            </th>
        </tr>

        
    </thead>

    {orderData.map((order) =>{
        return(
        <tbody>
            <tr>
                <th scope = "row" className = "px-6 py-4 font-medium text-blue-700 ">
                    #{order.id}
                </th>
                <td className = "flex items-center py-6 px-4 text-black-600 gap-2">
                    {(order.status === "Successful") && <div className =  "h-2.5 w-2.5 bg-green-500 rounded-full"/>} 
                    {(order.status === "Processing") && <div className =  "h-2.5 w-2.5 bg-gray-500 rounded-full"/>}
                    {(order.status === "Failed") && <div className =  " h-2.5 w-2.5 bg-red-500 rounded-full"/>}
                    {order.status}
                </td>
                <td className = "px-6 py-4 text-black-600">
                    {order.transactionID}
                </td>
                <td className = "px-6 py-4 text-black-600">
                    {order.refundDate}
                </td>
                <td className = "px-6 py-4 text-black-600 text-right">
                    {order.amount}
                </td>


            </tr>
        </tbody>
        )
    })}


    </table>


    </div>
}