import { useEffect, useState } from "react";
import "./DigitalPet.css"; 

function DigitalPet(){
  const [mood, setMood] = useState("happy");
  const [image, setImage] = useState("./images/happyFace.jpg");
  const [message, setMessage] = useState("");
  
  const changeMood = (newMood, newImage, alertMessage) => {
    setMood(newMood);
    setImage(newImage);
    setMessage(alertMessage);
  };

  const feedPet = () => {
    changeMood("Feeding", "./images/feedCat.jpg", "You feed Cat. Now she is happy")
  };

  const playWithPet = () => {
    changeMood("playful", "./images/playCat.jpg", "You played with Cat. She's feeling playful!");
  };

  const putPetToSleep = () => {
    changeMood("sleepy", "/images/sleepyCat.jpg", "You put Cat to sleep. She's taking a nap!");
  };

  const petSadness = () => {
    changeMood("sad", "/images/sadCat.jpg", "Cat is feeling sad. She needs your attention.");
  };

  useEffect(() => {
    if (message) {
      alert(message);
      setMessage("");
    }
  }, [message]);

  return(

    <div className="pet-container">
      <h1>Pet Mood Tracker</h1>
      <img src={image} alt={`A ${mood} pet`} className="pet-image" />
      <p className="pet-mood">Current Mood: {mood}</p>
      <button onClick={feedPet} className="pet-button">
        Feed Cat
      </button>
      <button onClick={playWithPet} className="pet-button">
        Play with Cat
      </button>
      <button onClick={putPetToSleep} className="pet-button">
        Put Cat to Sleep
      </button>
      <button onClick={petSadness} className="pet-button">
        Make Cat Sad
      </button>
    </div>
    
    );
}

export default DigitalPet;
