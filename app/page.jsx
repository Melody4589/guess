"use client";
import { Button, Input, Card, Typography , message} from "antd";
import { useState } from "react";
export default function Guess() {

const[answer, updateasnwer] = useState("");


function seeAnswer(evt) {
  updateasnwer(evt.target.value)



  

}

function myAnswer() {
  if(answer==22) {
    message.success("You're Correct!")
  } else {
    message.error("You're Wrong!")
  }
  
}




  return (
    <main>
      <Card title="Guessing Game" className="w-1/2 mx-auto my-52" >
        <Typography.Title>Hey!, i dare you to guess my age</Typography.Title>
        <Input placeholder="what is my age?" onChange={seeAnswer}/>
        <Button className="mt-5" type="primary" onClick={myAnswer}>check Answer</Button>
      </Card>
    </main>
  );
}
