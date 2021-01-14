import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function PetSearch() {

    return (
        <div>
            <div className="input-group mt-3">
                <input type="text" className="form-control form-control-md" placeholder="Describe your new friend..." />
                <button className="btn btn-primary ml-1"><FontAwesomeIcon type="submit" icon={faSearch} /></button>
            </div>
        </div>
    )
}

export default PetSearch;