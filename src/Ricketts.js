import axios from 'axios';
import { useState } from 'react';
import ShowDetails from './ShowDetails';
import ShowMes from './ShowMes';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Ricketts() {

    const[details1, setDetails1] = useState([]); // Getting data from the Database
    const[messages1, setMessages1] = useState([]); // Getting messages from the Database
    const[display1, setDisplay1] = useState(false);
    const[data1, setData1] = useState(''); // Storing the input value

    const handleRicketts = async () => {
        const ReturnValue = await axios.get('http://127.0.0.1:8000/RickettsGet');
        setDetails1(ReturnValue.data);

        const ReturnVal = await axios.get('http://127.0.0.1:8000/MessageGet');
        setMessages1(ReturnVal.data);

        setDisplay1(true);

    }

    const handleTextInput = (event) => {
        setData1(event.target.value)
    }

    const handleTextSend = async() => {
        const response = await axios.post("http://127.0.0.1:8000/MessagePost", {

            Messages:data1
        });

        handleRicketts();
    }


    const DisplayValue = details1.map((info) => {
        return <ShowDetails Weather={info.Weather} Location={info.Location} Env={info.Env} Alerts={info.Alerts} Transport={info.Transport} Groups={info.Groups}></ShowDetails>  
    });

    const DisplayMes = messages1.map((mes) => {
        return <ShowMes Messages={mes.Messages}></ShowMes>
    });

    return(
        <div className="HomeScreen">
            <Button onClick={handleRicketts}>Get Details</Button>

            {DisplayValue}

            <div className='MessageHolder'>{DisplayMes}</div>


            {display1 ? <div className='MessageInput'>
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

export default Ricketts;