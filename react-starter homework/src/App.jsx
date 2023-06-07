import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 26,
  };

  const colors = ["lightgray", "lightblue", "lightpink", "lightcoral"];

  return (
    <div className="App">
      <Header />
      <main>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <p>{person.age}</p>

        <div>
          <ul>
            {colors.map((color, i) => (
              <li key={color + i} style={{ backgroundColor: color }}>
                {color}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
