"use client"
import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"

import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
    const loggedIn={firstName:"Harpreet",lastName:"singh",email:"happy2003@gmail.com"}
  return (
    <section className="Home">
    <div className="home-content"> 
    <header className="home-header">
        <HeaderBox 
        type="greeting"
        title="welcome"
        user={loggedIn?.firstName||'Guest'}
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