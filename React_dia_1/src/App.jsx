import './App.css'
import Person from './components/Person'
import PersonClass from './components/PersonClass'

function App() {
  return (
    <>
      <Person name="name1" surname='surname1' age='10'></Person>
      <Person name='name2' surname='surname2' age='20'></Person>
      <Person name='name3' surname='surname3' age='30'></Person>
      <PersonClass name="name1 class" surname='surname1 class' age='40'></PersonClass>
      <PersonClass name="name2 class" surname='surname2 class' age='50'></PersonClass>
      <PersonClass name="name3 class" surname='surname3 class' age='60'></PersonClass>
    </>
  )
}

export default App