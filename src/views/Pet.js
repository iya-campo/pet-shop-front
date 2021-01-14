import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faCrow } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const Pet = (props) => {

    const setPetType = (petType) => {
        switch (petType) {
            case 1:
                return <FontAwesomeIcon icon={faDog} size='xs' className="ml-2" />
                break;
            case 2:
                return <FontAwesomeIcon icon={faCat} size='xs' className="ml-2" />
                break;
            case 3:
                return <FontAwesomeIcon icon={faCrow} size='xs' className="ml-2" />
                break;
            case 4:
                return <FontAwesomeIcon icon={faBug} size='xs' className="ml-2" />
                break;
            default:
                return <FontAwesomeIcon icon={faQuestion} size='xs' className="ml-2" />
                break;
        }
    }

    return (
        <div>
            <div className="card pet">
                <div className="d-flex">
                    <div className="pet-img" style={{ backgroundImage: `url(${props.img})` }}></div>
                    {/* <div className="pet-img" style={{ backgroundImage: 'url("https://lensdump.com/i/0FmoZP")' }}></div> */}
                    <div className="pet-info">
                        <h2>{props.name}{setPetType(props.type.id)}</h2>
                        <p className={"gender " + (props.gender ? 'female' : 'male')} ><FontAwesomeIcon icon={props.gender ? faVenus : faMars} className="mr-1" />{props.gender ? 'Female' : 'Male'}</p>
                        <label htmlFor="">Description:</label>
                        <p>{props.desc}</p>
                        <button className={"btn btn-primary " + (props.gender ? 'female' : 'male')}>Adopt<FontAwesomeIcon icon={farHeart} className="ml-1" /></button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Pet;