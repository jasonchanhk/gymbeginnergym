import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import Home from "./Components/HomeComponent";
import Nutrition from "./Components/NutritionComponent";
import Workout from "./Components/WorkoutComponent";
import Gym from "./Components/GymComponent";
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
  }, [])
  
  //nutrition selection

  const [nutritionStat, setNutritionStat] = useState({
    "calorie": 2369.777025,
    "balanced": {
        "protein": 140.01077832335315,
        "fat": 65.27529529940108,
        "carbs": 305.56406350299386
    },
    "lowfat": {
        "protein": 154.07804350817716,
        "fat": 51.98952388312719,
        "carbs": 321.38978400478663
    },
    "lowcarbs": {
        "protein": 168.38640442593348,
        "fat": 78.9608563127258,
        "carbs": 246.39592512043345
    },
    "highprotein": {
        "protein": 197.3225439159292,
        "fat": 59.101438274336196,
        "carbs": 262.14347621681435
    }
});
  const [statInput, setStatInput] = useState({
    age: 25,
    gender: "male",
    height: 175,
    weight: 75,
    activityLevel: 3,
    goal: "maintain"
  });


  useEffect(() => {

    console.log(statInput);

    const getNutritionStat = async () => {
      await axios.request({
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
        params: {
          age: statInput.age,
          gender: statInput.gender,
          height: statInput.height,
          weight: statInput.weight,
          activitylevel: statInput.activityLevel,
          goal: statInput.goal
        },
        headers: {
          'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
          'x-rapidapi-key': '341a03eda5msh10b4ad6b6bca891p1685a4jsndd453de6359a'
        }
      })
      .then((response) => {
        console.log(response.data);
        setNutritionStat(response.data);
      }).
      catch((error) => {
        console.error(error);
      });
    }
    getNutritionStat(statInput);
  },[statInput])
  

  return (
    <HashRouter>
      <div className="App">
            <Header />
            <Switch>
                <Route path="/home" component={() => <Home />} />
                <Route path="/nutrition"  component={() => <Nutrition nutritionStat={nutritionStat} setStatInput={setStatInput} statInput={statInput}  />} />
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
