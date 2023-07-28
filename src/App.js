import {useState} from "react";
import './App.css';
import axios from "axios";

function app(){
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState({});
  const [map, setMap] = useState("");

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }
}

async function handleSearch(event) {

  try{
    event.preventDefault();
    event.target.input.value = "";
    const API = `https://us1.locationiq.com/v1/search.php=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json`;
    const res = await axios.get(API);
    setLocation(res.data[0]);
    handleMap(res.data[0]);
  } catch (error) {
    console.log (error);
  }
 }


 async function handleSearch(event) {

  try{
    event.preventDefault();
    event.target.input.value = "";
    const API = `https://eu1.locationiq.com/v1/search.php${process.env.REACT_APP_API_KEY}&q=${searchQuery}&format=json`;
    const res = await axios.get(API);
    setLocation(res.data[0]);
    handleMap(res.data[0]);
  } catch (error) {
    console.log (error);
  }
 }


 function handleMap(data) {
  const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${data.lat},${data.lon}&zoom=9`;
  setMap(API);
 }

 return (
  <div>
    <form>
      <input type="text" placeholder="Search for a place" onChange={handleSearch} name="input"></input>
      <button type="Submit">Explore!</button> 
    </form>
  </div>
 )


export default App;
