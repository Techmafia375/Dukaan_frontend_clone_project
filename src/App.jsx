import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css' 
import { RevenueCard } from './components/RevenueCard'
import { PayoutCard } from './components/PayoutCard'
import { AmountProcessed } from './components/AmountProcessed'
import { TopBar } from './components/TopBar'
import { SideBar } from './components/SideBar'
import { TransactionLog } from './components/TransactionLog'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className = "flex-1 transition-all duration-300 sm:ml-0 md:ml-64">
      <div>
         <SideBar user = "Vansh" />
      </div>
      <div className = "flex-1">
      <div>
        <TopBar />
      </div> 
      <div className = "flex justify-between px-10 py-6">
        <div className = " font-sans text-xl font-semibold">
          Overview
        </div>
        <div className = "flex cursor-pointer hover:bg-gray-100">
        <div className = "grid grid-flow-col items-center gap-2 h-9 rounded border border-black-150 px-3 ">
          <p>This Month </p>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
          </div>


        </div>
      </div>
      
      <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 ">
        
        <div className = "ml-0 mt-0 flex min-w-[200px] max-w-sm">
        <PayoutCard title = "Amount Pending" amount = "2430.23" orderCount = "13"/>
        </div>
        <div className= "ml-2 flex-1 min-w-[200px] max-w-sm">
          <RevenueCard title = "NextPayout" amount = "92,213.23" orderCount = "15" />
        </div>
        <div className = "ml-2 flex-1 min-w-[200px] max-w-sm">
          <AmountProcessed title = "AmountProcessed" amount = "23,92,312.19"/>
        </div>
        
        
        </div>
        <div className = "font-semibold text-xl ml-10">
          Transaction | This Month
        </div>

      
        <div className = "flex mt-2">
          <div className = "bg-gray-300 rounded-full px-1 py-1 w-30 shadow-2xl ml-10 pl-2 cursor-pointer font-normal text-sm flex justify-center items-center "> 
            Payouts (22)
          </div>
          <div className = " ml-3 bg-[#0D6BBA] rounded-full px-1 py-1 shadow-2xl cursor-pointer flex justify-center items-center text-white w-30 ml-0">
            Refunds  (6)
          </div>
        </div>
        <div className = "mt-5 bg-gray-100 shadow-2xl w-[80vw] h-[80vw]rounded-lg mx-auto relative overflow-x-auto">
          <TransactionLog></TransactionLog>
        </div>
        
       
      
      </div>
      <div className = "mt-5 ml-100">
        <Footer></Footer>
      </div>
      </div>
      
    
    
  )
}
export default App
