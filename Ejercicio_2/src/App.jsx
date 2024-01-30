// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Header name='Iker Landaberea Lorenzo' age='39'/>
      <Home 
        section='¿Quién soy?' 
        data='Tal y como indica el encabezado, soy Iker, tengo 39 años, y actualmente estoy cursando un bootcamp de desarrollo web 
            en la modalidad part-time.'
      />
      <Home 
        section='¿Qué estudios tengo?' 
        data='Soy técnico superior en administración de sistemas informáticos, y también diplomado en empresariales.'
      />
      <Home 
        section='¿Qué tecnologías conozco?' 
        data='En el bootcamp, hasta el momento he aprendido a utilizar HTML, CSS, Javascript, mySQL, MongoDB, Bootstrap, Docker, 
              Node.js, Swagger, y actualmente aprendiendo React'
      />
    </>
  )
}

export default App
