import React, { useState } from 'react'
import Message from './Message';
const Main = () => {


    const [time, setTime] = useState(3); // Initial value for time in minutes
    const [message, setMessage] = useState(""); // Initial value for time in minutes
    const [hor, setHor] = useState("left"); // Initial value for time in minutes
    const [ver, setVer] = useState("top"); // Initial value for time in minutes
    const [status, setstatus] = useState("success"); // Initial value for time in minutes

    const handleSliderChange = (event) => {
        setTime(event.target.value);
    };

    console.log(status)
    return (

        <div className='flex flex-col text-center items-center gap-4 relative h-[90vh]'>

            <select className='w-32 border-2 border-black rounded-md px-2' value={hor} onChange={(event)=>{setHor(event.target.value)}}>
                <option value="left" >Left</option>
                <option value="right" >Right</option>
            </select>

            <select className='w-32 border-2 border-black rounded-md px-2' value={ver} onChange={(event)=>{setVer(event.target.value)}}>
                <option value="top" >Top</option>
                <option value="bottom" >Bottom</option>
            </select>
            <select className='w-32 border-2 border-black rounded-md px-2' value={status} onChange={(event)=>{setstatus(event.target.value)}}>
                <option value="success" >success</option>
                <option value="error" >error</option>
            </select>

            <div>Enter the message: <input className='w-[15vw] border-2 border-black rounded-md px-2' type="text" onChange={(e) => { setMessage(e.target.value) }} /></div>

            <div style={{ width: '300px', margin: '0 auto' }}>
                <h1>Select Time Duration</h1>
                <input
                    type="range"
                    min="0"
                    max="6"
                    value={time}
                    onChange={handleSliderChange}
                />
                <div>
                    <p>Selected Duration: {time} seconds</p>
                </div>
            </div>
            <Message message={message} time={time} hor={hor} ver={ver} status={status} />
        </div>

    )


}

export default Main
