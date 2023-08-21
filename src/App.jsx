import './styles/main.scss'
import { Route, Routes,  BrowserRouter } from "react-router-dom";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Chat from './components/Chat.jsx'
import Home from './components/Home.jsx'
import ChatContext from './components/ChatContext';
import { useState } from 'react';



function App() {
  const [currentPseudo, setCurrentPseudo] = useState("")
  const [messagesList, setMessagesList] = useState ([{pseudo: "Valou", message: "Hello Mec", date: Date() }, {pseudo: "Pierre", message: "Salut les gas", date: Date() }])
  function removePseudoValue() {
    setCurrentPseudo("")
  }
  
  const editCurrentPseudo = (value) => {
    setCurrentPseudo(value)
  }

  const editMessagesList = (value) => {
    console.log([...messagesList, {pseudo: currentPseudo, message: value, date: Date()}])
    setMessagesList([...messagesList, {pseudo: currentPseudo, message: value, date: Date()}])
    console.log(value);
  }

  return (
    <div>
    <ChatContext.Provider value={[messagesList, editMessagesList]}>
    <BrowserRouter>
      <Header pseudo={currentPseudo} removePseudoValue={() => removePseudoValue()} ></Header>
          <Routes>
            <Route exact path="/" element={!currentPseudo ? <Home editCurrentPseudo={(value) => editCurrentPseudo(value)}/> : <Chat currentPseudo={currentPseudo} />}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </ChatContext.Provider>
    </div>
  )
}

export default App
