import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import AT from './images/AT.jpg';
import HRS from './images/HRS.jpg';
import OSP from './images/OSP.jpg';
import RGSP from './images/RGSP.jpg';
import WES from './images/WES.jpg';
import axios from 'axios';

function App()
{

    const [show1, setShow1] = useState(false); // To show details of the 1st Card
    const [show2, setShow2] = useState(false); // To show details of the 2nd Card
    const [show3, setShow3] = useState(false); // To show details of the 3rd Card
    const [show4, setShow4] = useState(false); // To show details of the 4th Card
    const [show5, setShow5] = useState(false); // To show details of the 5th Card


    const handleCardOne = () => {
        if(show1===true)
        {
            setShow1(false);
        }
        else{
            setShow1(true);
        }
    }

    const handleCardTwo = () => {
        if(show2===true)
        {
            setShow2(false);
        }
        else{
            setShow2(true);
        }
    }

    const handleCardThree = () => {
        if(show3===true)
        {
            setShow3(false);
        }
        else{
            setShow3(true);
        }
    }

    const handleCardFour = () => {
        if(show4===true)
        {
            setShow4(false);
        }
        else{
            setShow4(true);
        }
    }

    const handleCardFive = () => {
        if(show5===true)
        {
            setShow5(false);
        }
        else{
            setShow5(true);
        }
    }
    return(
        <div className='HomeScreen'>
            <div className='LocationCard' onClick={handleCardOne}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={RGSP} />
                </Card>
            </div>

            { show1 ? <div className='CardInfo'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Where Falls and Wilds Collide!</Card.Header>
                    <Card.Text>
                        Known for its stunning waterfalls, Ricketts Glen features a 7.2-mile Falls Trail that takes you past 21 waterfalls.
                    </Card.Text>
                </Card>
            </div> : null}

            <div className='LocationCard' onClick={handleCardTwo}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={HRS} />
                </Card>
            </div>

            { show2 ? <div className='CardInfo'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Where Nature's Harmony Resides!</Card.Header>
                    <Card.Text>
                        This park features the popular Boulder Field and numerous hiking trails, including the 15.8-mile Shades of Death Trail.
                    </Card.Text>
                </Card>
            </div> : null}

            <div className='LocationCard'>
                <Card style={{ width: '20rem' }} onClick={handleCardThree}>
                    <Card.Img variant="top" src={OSP} />
                </Card>
            </div>

            { show3 ? <div className='CardInfo'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Where Adventure Flows!</Card.Header>
                    <Card.Text>
                        The Ferncliff Peninsula Trail and the Great Allegheny Passage are great options for hikers.
                    </Card.Text>
                </Card>
            </div> : null}

            <div className='LocationCard' onClick={handleCardFour}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={WES} />
                </Card>
            </div>

            { show4 ? <div className='CardInfo'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Nature's Grand Finale!</Card.Header>
                    <Card.Text>
                        Located in the Loyalsock State Forest, this park features several hiking trails that wind through beautiful forested areas and offer picturesque views.
                    </Card.Text>
                </Card>
            </div> : null}

            <div className='LocationCard' onClick={handleCardFive}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={AT} />
                </Card>
            </div>

            { show5 ? <div className='CardInfo'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header>Hike the Horizon!</Card.Header>
                    <Card.Text>
                        The Appalachian Trail passes through Pennsylvania, offering hikers the chance to experience a portion of this famous long-distance trail.
                    </Card.Text>
                </Card>
            </div> : null}
        </div>
    )
}

export default App;