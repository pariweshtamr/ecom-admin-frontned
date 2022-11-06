import React from "react"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"
import { MainContainer } from "./mainStyles"

const Main = () => {
  return (
    <MainContainer>
      <Sidebar />
      <div className="main-wrapper">
        <Navbar />
      </div>
    </MainContainer>
  )
}

export default Main
