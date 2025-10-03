export function TransactionSearch(){
    return<div>
         <div className =  "mb-3">

            <form className = "max-w-sm mx-auto pt-2  flex justify-between ">   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className = "relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className ="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-100 h-10 p-4 ps-10 text-sm text-gray-900 shadow-sm rounded-lg bg-white focus:outline-none focus:ring-0 border border-gray-200" placeholder="Order ID or Transaction ID" required />
                    
                </div>
            </form>
            </div>
    </div>
}