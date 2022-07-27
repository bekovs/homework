import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  let users = [
    {
      name: 'Sultan',
      lastName: 'Bekov',
      age: 25,
      id: 1
    },
    {
      name: 'Luffy',
      lastName: 'Monkey D',
      age: 21,
      id: 2
    },
    {
      name: 'Naruto',
      lastName: 'Uzumaki',
      age: 27,
      id: 3
    }
  ]

  return (
    <div className="App">
      <Header />
      <Section users={users}/>
      <Footer />
    </div>
  );
}

export default App;
