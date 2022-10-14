import React from 'react';
import logo from './logo.svg';
import './App.css';
// import King from './compoents/king';
import King1 from './compoents/king1';
import {Status} from './compoents/status';
import { Heading } from './compoents/heading';
import { Oscar } from './compoents/oscar';
import { Greet } from './compoents/Greet';
import { Button } from './compoents/Button';
import  {Inputt}  from './compoents/Inputt'
import { Container } from './compoents/Container';
import { Loggedin } from './Loggedin';
import { Loggedins } from './compoents/LoggedIns';


function App(): JSX.Element {
  const personName={
    name:"bruce",
    place:"kin",
    isLoggedIn:true
  }
  const handleClick=(event:React.MouseEvent<HTMLButtonElement>, id:number)=>{
    console.log('Button Clicked',Event)
  }
  return (
    <div >
      {/*<King name="jonsnow" place="witrfell" isLoggedIn={true}/>*/}
      <King1 name={personName} />
      <Status status="loading"/>
      <Oscar><Heading>super</Heading></Oscar>
      < Greet isLoggedIn={true} messageCount={20}/>
      <Button handleClick={handleClick}/>
      <Inputt value='' handleChange={(event)=>console.log(event)}/>
      <Container styles={{color:"red", padding:"1rem", width:"20px", backgroundColor:"yellow"}}/>
      <Loggedin/>
      <Loggedins />
    </div>
  );
}

export default App;
