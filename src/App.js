import MainSection from "./components/MainSection";
import "./App.css"
import photo from "./components/images/model-s1.jpg"
import photo1 from "./components/images/model-y2.jpg"
import photo2 from "./components/images/model-x1.jpg"
// import Nav from "./components/Nav";
// import photo3 from "./components/images/accessories.jpg"

function App() {
  console.log("app" + photo);
  return (
    <div className="App">

    {/* <Nav/> */}



      <MainSection
        movieName={"TESLA MODEL-S"}
        image={photo}
      />

      <MainSection
        movieName={"TESLA MODEL-X"}
        image={photo1}
      />

      <MainSection
        movieName={"TESLA MODEL-Y"}
        image={photo2}
      />

      {/* <MainSection
        movieName={"INCEPTION"}
        image={photo3}
      /> */}



    </div>
  );
}

export default App;
