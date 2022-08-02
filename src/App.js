import React, {useState}  from 'react';
import LoadingButton from './load-button';
import ListOfAnimals from './AnimalList';
import HandleEvent from './TextEvent';
import CounterComponent from './counter';
import CountdownComp from './countdown';
import './index.css';

function Card(props) {
  return (
<section>    
  <h2>  
    {props.icon} Heading
  </h2>
  {props.children}
</section>
  );
}

function MyIcon() {
  return <i>🐉</i>;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Card icon={<MyIcon />}>
        <p>
          The body of the card
        </p>
      </Card>
      <CountdownComp />
      <LoadingButton 
        label="Press Me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        />
      <ListOfAnimals />
      <CounterComponent/>
      < HandleEvent />
    </>
  );
}