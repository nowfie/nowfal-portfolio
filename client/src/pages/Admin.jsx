import { useState } from "react"
import Authentication from "../sections/Authentication"
import SideBar from "../components/SideBar"
import DataList from "../sections/DataList"

const Admin = () => {
    const [authenticated,setAuthenticated] = useState(false)
    const [select,setSelect] = useState('home')

    const Dashboard = () =>{
        return(
            <section className="xl:w-[83%] bg-background text-heading pt-28 xl:pt-10 main">
                <div className="">
                    {select !='home'?(
                        <DataList table={select}/>
                    ):(
                    <h1>dashboard</h1>
                    )}
                </div>
            </section>
        )
    }

  return (
    <main className="">
        {authenticated?(
            <Authentication/>
        ):(
            <div className="flex h-screen flex-col xl:flex-row ">
                <SideBar selectTable={[select,setSelect]}/>
                <Dashboard/>
            </div>
        )}
    </main>
  )
}

export default Admin