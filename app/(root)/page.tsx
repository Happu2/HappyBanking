"use client";
import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"

import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const Home = async() => {
  const loggedIn=await getLoggedInUser();
  return (
    <section className="Home">
    <div className="home-content"> 
    <header className="home-header">
        <HeaderBox 
        type="greeting"
        title="welcome"
        user={loggedIn?.name||'Guest'}
        subtext="Access and manage your account and transactions efficiently"
        />
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1400}
        />
     </header>
    
    
   </div>
   

<RightSidebar
      user={loggedIn}
       transactions={[]}
     banks={[{currentBalance:123.50},{currentBalance:500.50}]}
     />
    </section>
  )
}

export default Home