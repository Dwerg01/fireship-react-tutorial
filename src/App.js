import React, {useState}  from 'react';
import LoadingButton from './load-button';
import ListOfAnimals from './AnimalList';
import HandleEvent from './TextEvent';
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
    <div>
      <Card icon={<MyIcon />}>
        <p>
          The body of the card
        </p>
      </Card>
      <LoadingButton 
        label="Press Me"
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        />
      <ListOfAnimals />
      < HandleEvent />
    </div>
  );
}