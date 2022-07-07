import RoutesGet from "./routes/Routes"
import ButtoGreen from "./shared/components/ButtonGreen/ButtoGreen"
import HeaderMain from "./shared/components/HeaderMain/HeaderMain"
import {GlobalStyles} from './styles/GlobalStyles'

function App() {


  return (
    <div className="App">
      <HeaderMain />
      <RoutesGet />
     <GlobalStyles/>
    </div>
  )
}

export default App
