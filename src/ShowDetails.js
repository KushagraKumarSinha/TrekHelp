import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ShowDetails({Weather, Location, Env, Alerts, Transport, Groups}) {
    return(
        <div>
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={Env} />
                </Card>
            </div>

            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Header><div className='CardInfo'><div><center>WEATHER</center></div></div></Card.Header>
                    <Card.Text>
                        {Weather}
                    </Card.Text>
                </Card>
            </div>

            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Header><div className='CardInfo'><center>LOCATION</center></div></Card.Header>
                    <Card.Text>
                        {Location}
                    </Card.Text>
                </Card>
            </div>

            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Header><div className='CardInfo'><center>ALERTS</center></div></Card.Header>
                    <Card.Text>
                        {Alerts}
                    </Card.Text>
                </Card>
            </div>

            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Header><div className='CardInfo'><center>TRANSPORTATION</center></div></Card.Header>
                    <Card.Text>
                        {Transport}
                    </Card.Text>
                </Card>
            </div>

            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Header><div className='CardInfo'><center>GROUPS</center></div></Card.Header>
                    <Card.Text>
                        {Groups}
                    </Card.Text>
                </Card>
            </div>
        </div>
    )
}

export default ShowDetails