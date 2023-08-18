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
  function removePseudoValue() {
    setCurrentPseudo("")
  }
  
  const editCurrentPseudo = (value) => {
    setCurrentPseudo(value)
  }

  return (
    <div>
    <ChatContext.Provider value={"yolo"}>
    <BrowserRouter>
      <Header pseudo={currentPseudo} removePseudoValue={() => removePseudoValue()} ></Header>
          <Routes>
            <Route exact path="/" element={!currentPseudo ? <Home editCurrentPseudo={(value) => editCurrentPseudo(value)}/> : <Chat currentPseudo={currentPseudo} />}/>
            <Route path="/chat" element={currentPseudo ? <Home editCurrentPseudo={(value) => editCurrentPseudo(value)}/> : <Chat currentPseudo={currentPseudo} />}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </ChatContext.Provider>
    </div>
  )
}

export default App
