import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import Scroll from '../components/Scroll';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSeachfield] = useState('');

useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
},[]) 

    const onSearchChange = (event) => {
        setSeachfield(event.target.value)
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
         return !robots.length? 
            <h1>Loading</h1> :
            (
                <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                </div>
            );
} 

export default App;