import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowMes({Messages}) {
    return(
        <div>
            <   Card style={{ width: '20rem' }} bg = 'primary'>
                    <Card.Header><div className='DisplayMess'>{Messages}</div></Card.Header>
                </Card>
        </div>
    )
}

export default ShowMes;