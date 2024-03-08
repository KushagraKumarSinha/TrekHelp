import {Route, Routes} from "react-router-dom"
import NabBar from "./NabBar"
import App from "./App"
import Ricketts from "./Ricketts";
import Hickory from "./Hickory";
import Ohiopyle from "./Ohiopyle";
import WorldsEnd from "./WorldsEnd"
import Appalachian from "./Appalachian"
import Button from 'react-bootstrap/Button';


function MainPage(){
    return(
        <div>
            <NabBar />

            <div>
                <Routes>
                    <Route index element={<App/>} />
                    <Route path="/App" element={<App/>} />
                    <Route path="/Ricketts" element={<Ricketts/>} />
                    <Route path="/Hickory" element={<Hickory/>} />
                    <Route path="/Ohiopyle" element={<Ohiopyle/>} />
                    <Route path="/WorldsEnd" element={<WorldsEnd/>} />
                    <Route path="/Appalachian" element={<Appalachian/>} />
                </Routes>
            </div>

        </div>
    )
}

export default MainPage