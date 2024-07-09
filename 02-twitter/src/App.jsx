//import Avatar from 'react-avatar';
import { useState } from 'react';
import './App.css'
import TwitterFollowCard from './TwitterFollowCard.jsx';

export function App () {
    let format = (userName) => `@${userName}`
    let [name, Rename] = useState('Ezequiel')
    
    console.log('reanaliza con el nombre: ' , name)  //se ejecuta cada vez que cambie el estado pol default

    return (
        <section className='App'>
        <TwitterFollowCard formatUsername={format} isFollowing userName={name} usuario={name}>
              Luis Antonio Soledad de Jesus
        </TwitterFollowCard>

        <TwitterFollowCard formatUsername={format} isFollowing userName="Juan02" usuario="Ramón">
                San Patricio de Belen 
        </TwitterFollowCard>

        <TwitterFollowCard formatUsername={format} isFollowing={false} userName="gab115" usuario="Rodriguez">
            Juan Luis Garcia
        </TwitterFollowCard>

        <TwitterFollowCard formatUsername={format} isFollowing userName="ramon_cantin" usuario="Sanchez">
            Vicente Orlando Herrera
        </TwitterFollowCard>
        
        <button onClick={() => Rename('Ramón')}>Cambiar nombre</button>

        </section>


    )
 }

 /* <Avatar name="David Hernandez" round={true}/> */ 