import axios from 'axios';
import { useState } from 'react';
import ShowDetails from './ShowDetails';
import ShowMes from './ShowMes';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Ohiopyle() {

    const[details3, setDetails3] = useState([]); // Getting data from the GET request
    const[messages3, setMessages3] = useState([]); // Getting messages from the Database
    const[display3, setDisplay3] = useState(false);
    const[data3, setData3] = useState(''); // Storing the input value

    const handleOhiopyle = async () => {
        const ReturnValue = await axios.get('http://127.0.0.1:8000/AppalachianGet');
        setDetails3(ReturnValue.data);

        const ReturnVal = await axios.get('http://127.0.0.1:8000/AppalachianMessageGet');
        setMessages3(ReturnVal.data);

        setDisplay3(true);
    }

    const handleTextInput = (event) => {
        setData3(event.target.value)
    }

    const handleTextSend = async() => {
        const response = await axios.post("http://127.0.0.1:8000/AppalachianMessagePost", {

            Messages:data3
        });

        handleOhiopyle();
    }

    const DisplayValue = details3.map((info) => {
        return <ShowDetails Weather={info.Weather} Location={info.Location} Env={info.Env} Alerts={info.Alerts} Transport={info.Transport} Groups={info.Groups}></ShowDetails>  
    });

    const DisplayMes = messages3.map((mes) => {
        return <ShowMes Messages={mes.Messages}></ShowMes>
    });

    return(
        <div className="HomeScreen">
            <Button onClick={handleOhiopyle}>Get Details</Button>
            {DisplayValue}

            <div className='MessageHolder'>{DisplayMes}</div>


            {display3 ? <div className='MessageInput'>
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

export default Ohiopyle;