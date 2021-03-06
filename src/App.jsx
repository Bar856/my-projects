import Header from './Compoments/Header';
import Urls from './Compoments/Urls';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bank from './imgs/bank.png' 
import battle1 from './imgs/battle1.png' 
import battle2 from './imgs/battle2.png' 
import bestmovie from './imgs/bestmovie.png' 
import garage from './imgs/garage.png' 
import gym from './imgs/gym.png' 
import smarthome1 from './imgs/smarthome1.png' 
import smarthome2 from './imgs/smarthome2.png' 
import switcher from './imgs/switcher.png' 
function App() {
  class MyUrl{
    constructor(url,name,describe,images){
      this.url = url;
      this.name=name;
      this.describe = describe; 
      this.images = images;
    }
  }
  const myLinks = [
    new MyUrl('https://bar856.github.io/SwitcherForDjs/','Switcher',[
      'Gui App designed to give soulutions for Djs - Built with Python',"In Pioneer cdj's and all-in-one Players there is no support on Hebrew",
      "This app identifying the names inside chosen folder that contains Hebrew chars and change the name to English and keep the original name also."
    ],[switcher,]),
    new MyUrl('https://bar856.github.io/BattleGame/','BattleGame',[
      "Battle Cards game made with React"
    ],[battle1,battle2]),
    new MyUrl('https://bar856.github.io/SmartHomeApp/','SmartHomeApp',[
      "Freamwork for Smart Home App made with React."
    ],[smarthome1,smarthome2]),
    new MyUrl('https://bar856.github.io/best-movie','Movie Rating',[
      "Movies Rating System on React."
    ],[bestmovie,]),
    new MyUrl('https://bar856.github.io/car-garage/','Car Garage app',[
      "Car garage app made with React."
    ],[garage,]),
    new MyUrl('https://bar856.github.io/sv-bank/','Bank app',[
      "Bank app made with React."
    ],[bank,]),
    new MyUrl('https://bar856.github.io/gym-app/','Gym app',[
      "Workouts Track App made with React."
    ],[gym,]),
  ]
  return (
    <div className="App">
        <Header title='My Projects'/>
        <Urls links={myLinks}/>
    </div>
  );
}

export default App;
