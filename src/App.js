import { useState } from "react"
import DisplayBox from "./components/DisplayBox"
import Footer from "./components/Footer"
import SeachBox from "./components/SeachBox"

const App = () => {
  const [search, setSearch] = useState('')


  return (
    <div className='App'>
      <DisplayBox 
        search = {search}
      />
      <SeachBox
        search={search}
        setSearch={setSearch}
      />
      <Footer />
    </div>
  )
}

export default App