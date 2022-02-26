import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from "../components/Button";

const CreateForm = () => {

    let navigate = useNavigate();

    // const [eventName, setEventName] = useState("");
    // const [hostName, setHostName] = useState("");
    // const [enteredDate, setEnteredDate] = useState('');

    // const eventInputHandler = (event) => {
    //     setEventName(event.currentTarget.value);
    // }
    //
    // const hostNameHandler = (event) => {
    //     setHostName(event.currentTarget.value);
    // }
    //
    // const dateHandler = (event) => {
    //     setEnteredDate(event.currentTarget.value);
    // }


    //Using the other way to setState
    const [state, setState] = useState({
        eventName: '',
        hostName: '',
        enteredDate: ''
    });

    //Using Currying for different input
    const inputHandler = (inputValue) => (event) => { //eventName
        setState({
            ...state, // destructuring an object, copies all items into an object to a new object
            // destructure will copy all this
            // eventName: '',
            // hostName: '',
            // enteredDate: '',
            // [eventName]: event.target.value
            // state[eventName] = event.target.value
            // state.eventName = event.target.value
            [inputValue]: event.target.value, // key assignment, same as state[fieldName] = event.target.value
        })
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        const eventData = {
            id: Math.random().toString(),
            eventName: state.eventName,
            hostName: state.hostName,
            date: new Date(state.enteredDate)
        }
        navigate(`/event/${eventData.id}`);
    }

    return (
        <div className={"h-screen flex justify-center items-center drop-shadow-md"}>
            <form
                onSubmit={formSubmissionHandler}
                className={"px-16 py-20 bg-gray-100 rounded-md"}
            >
                <div className={"font-bold text-4xl text-center mb-20"}>Create an Event</div>
                <div className={"form-control mb-4 flex"}>
                    <div className={"w-1/3"}>
                        <label className={"mr-4 block"} htmlFor={"name"}>Event Name:</label>
                    </div>
                    <div className={"w-2/3"}>
                        <input
                            className={"w-full py-1 appearance-none leading-tight border-2 focus:outline-none focus:bg-white focus:border-purple-500"}
                            type={"text"} id={'name'} onChange={inputHandler('eventName')}/>
                    </div>
                </div>
                <div className={"form-control mb-6 flex"}>
                    <div className={"w-1/3"}>
                        <label className={"mr-4 block"} htmlFor={"host"}>Host Name:</label>
                    </div>
                    <div className={"w-2/3"}>
                        <input
                            className={"w-full py-1 appearance-none leading-tight border-2 focus:outline-none focus:bg-white focus:border-purple-500"}
                            type={"host"}
                            id={'host'}
                            onChange={inputHandler('hostName')}
                        />
                    </div>
                </div>
                <div className={"form-control mb-20 flex"}>
                    <div className={"w-1/3"}>
                        <label className={"mr-4 block"} htmlFor={"date"}>Date:</label>
                    </div>
                    <div className={"w-2/3"}>
                        <input
                            className={"w-full py-1 appearance-none leading-tight border-2 focus:outline-none focus:bg-white focus:border-purple-500"}
                            type={"date"}
                            id={'date'}
                            min={"2022-01-01"}
                            max={"2022-12-31"}
                            onChange={inputHandler('enteredDate')}
                        />
                    </div>
                </div>
                <div className={"flex justify-center items-center"}>
                    <Button text={"Next"}/>
                </div>
            </form>
        </div>
    )
}

export default CreateForm;
