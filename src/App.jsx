import MovieDetail from "./Components/MovieDetail"
import {Routes,Route} from "react-router-dom"
import Help from "./Components/Help"






function App() {
 

  return (
   <div className="h-screen w-full">
     
      <Routes>
        <Route path="/" element={<MovieDetail/>}/>
        <Route path="/help" element={<Help/>}/>
        </Routes>
              
  
   </div>
  )
}

export default App
