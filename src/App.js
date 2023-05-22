import Benefits from "./components/benefits/Benefits"
import Blog from "./components/blog/Blog"
import Clients from "./components/clients/Clients"
import Faq from "./components/faq/Faq"
import Footer from "./components/footer/Footer"
import FormSubscription from "./components/form-subscription/FormSubscription"
import Global from "./components/global/Global"
import Header from "./components/header/Header"
import Streamline from "./components/streamline/Streamline"

function App() {
  return (
    <div className="App">
      <Header />
      <Global />
      <Benefits />
      <Streamline />
      <Faq />
      <Blog />
      <FormSubscription />
      <Clients />
      <Footer />
    </div>
  )
}

export default App
