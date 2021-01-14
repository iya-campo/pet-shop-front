import React, { useState, useEffect } from 'react';
import Pet from './Pet'
import PetSearch from './PetSearch'

function Home() {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPets();
    }, []);

    const getPets = async () => {
        const response = await fetch('http://localhost:8080/pet');
        const data = await response.json();
        setPets(data);
        console.log(data);
    }

    return (
        <div>
            <header>
                <h1>Pet Shop</h1>
                <h5>Please adopt all these good boys and girls. :(</h5>
                <PetSearch />
            </header>
            <div className="pets-list mt-4">
                {pets.map(pet => (
                    <Pet name={pet.name} type={pet.type} gender={pet.gender} desc={pet.description} img={pet.petImg} />
                ))}
            </div>
        </div>
    )
}

export default Home;