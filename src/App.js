import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import Home from "./Components/HomeComponent";
import Nutrition from "./Components/NutritionComponent";
import Workout from "./Components/WorkoutComponent";
import Gym from "./Components/GymComponent";
import ScrollToTop from "./Components/ScollToTop";
import axios from "axios"

function App() {
  
  //workout selection

  const [exercises, setExercises] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/barbell',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': '341a03eda5msh10b4ad6b6bca891p1685a4jsndd453de6359a'
    }
  };
  useEffect(() => {
    const getExerciseData = async () => {
      await axios.request(options)
      .then((response) => {
        console.log(response.data);
        setExercises(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    getExerciseData()
  })
  
  return (
    <HashRouter>
      <div className="App">
            <ScrollToTop />
            <Header />
            <Switch>
                <Route path="/home" component={() => <Home />} />
                <Route path="/nutrition"  component={() => <Nutrition   />} />
                <Route path="/workout"  component={() => <Workout exercises={exercises} />} />
                <Route path="/gymnearby"  component={() => <Gym />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
