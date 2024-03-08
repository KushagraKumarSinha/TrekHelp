import axios from 'axios';
import { useState } from 'react';
import ShowDetails from './ShowDetails';
import ShowMes from './ShowMes';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Hickory() {

    const[details2, setDetails2] = useState([]); // Getting data from the GET request
    const[messages2, setMessages2] = useState([]); // Getting messages from the Database
    const[display2, setDisplay2] = useState(false);
    const[data2, setData2] = useState(''); // Storing the input value

    const handleHickory = async () => {
        const ReturnValue = await axios.get('http://127.0.0.1:8000/HickoryGet');
        setDetails2(ReturnValue.data);

        const ReturnVal = await axios.get('http://127.0.0.1:8000/HickoryMessageGet');
        setMessages2(ReturnVal.data);

        setDisplay2(true);
    }

    const handleTextInput = (event) => {
        setData2(event.target.value)
    }

    const handleTextSend = async() => {
        const response = await axios.post("http://127.0.0.1:8000/HickoryMessagePost", {

            Messages:data2
        });

        handleHickory();
    }

    const DisplayValue = details2.map((info) => {
        return <ShowDetails Weather={info.Weather} Location={info.Location} Env={info.Env} Alerts={info.Alerts} Transport={info.Transport} Groups={info.Groups}></ShowDetails>  
    });

    const DisplayMes = messages2.map((mes) => {
        return <ShowMes Messages={mes.Messages}></ShowMes>
    });

    return(
        <div className="HomeScreen">
            <Button onClick={handleHickory}>Get Details</Button>
            {DisplayValue}

            <div className='MessageHolder'>{DisplayMes}</div>


            {display2 ? <div className='MessageInput'>
                <Card style={{ width: '20rem' }}>
                    <Card.Header><input onChange={handleTextInput}></input></Card.Header>
                    <Card.Text>
                        <button onClick={handleTextSend}>SEND</button>
                    </Card.Text>
                </Card>
            </div> : null}
        </div>
    )
}

export default Hickory;