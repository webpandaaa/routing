
import axios from "./helpers/axios";
import Nav from "../src/components/Nav";
import RoutesComponents from './Routes/RoutesComponents';

const App = () => {
  return (
    <div className=' p-5 content-center w-[100%]'>
      <Nav/>
      <RoutesComponents/>
      
      
    </div>
  )
}

export default App

