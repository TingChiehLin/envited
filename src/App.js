import {Routes, Route} from "react-router-dom";

import Main from './layout/Main';
import CreateForm from './layout/CreateForm';
import EventDetail from './layout/EventDetail';

const App = () => {
    return (
        <div style={{background: "linear-gradient(163.63deg, #501FC1 12.2%, #C346D5 96.78%)"}}
             className="w-full h-screen">
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/create"} element={<CreateForm/>}/>
                <Route path={"/event/:eventId"} element={<EventDetail/>}/>
            </Routes>
        </div>
    );
}

export default App;
