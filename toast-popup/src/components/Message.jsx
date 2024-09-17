
import React, { useRef, useState } from 'react'


const Message = (props) => {
    const count = useRef(0)
    const [arr, setArr] = useState([])
    const handleClick = async () => {
        count.current = count.current + 1
        const obj = { "id": count.current, "message": props.message }
        setArr([...arr, obj])
        console.log(arr.splice(1))

        setTimeout(() => {
            setArr((prevItems) => prevItems.slice(1));
        }, props.time * 1000)

    }

    const handleDelete = (id) => {
        const find = arr.filter((e) => { return e.id != id })
        setArr([...find])
    }
console.log(props.hor)
    return (<>
        <button onClick={handleClick}>show toast</button>
        <div className={`${((props.hor)=="left" && (props.ver == "top")) ? "absolute top-3 left-3 " : "hidden"} z-10 h-auto w-auto`}>
            {arr.map((e) => {
            return (
                <div className={`${props.status=="success" ? "bg-green-500" : "bg-red-500"} shadow-2xl rounded-md px-3 py-1 mb-2`} key={e.id}>{e.message} <button className='border-black border-2 px-2' onClick={() => { handleDelete(e.id) }}>X</button></div>
            )
        })}
        </div>
        <div className={`${((props.hor)=="left" && (props.ver == "bottom")) ? "absolute bottom-3 left-3 " : "hidden"} z-10 h-auto w-auto`}>
            {arr.map((e) => {
            return (
                <div className={`${props.status=="success" ? "bg-green-500" : "bg-red-500"} shadow-2xl rounded-md px-3 py-1 mb-2`} key={e.id}>{e.message} <button className='border-black border-2 px-2' onClick={() => { handleDelete(e.id) }}>X</button></div>
            )
        })}
        </div>
        <div className={`${((props.hor)=="right" && (props.ver == "top")) ? "absolute top-3 right-3 " : "hidden"} z-10 h-auto w-auto`}>
            {arr.map((e) => {
            return (
                <div className={`${props.status=="success" ? "bg-green-500" : "bg-red-500"} shadow-2xl rounded-md px-3 py-1 mb-2`} key={e.id}>{e.message} <button className='border-black border-2 px-2' onClick={() => { handleDelete(e.id) }}>X</button></div>
            )
        })}
        </div>
        <div className={`${((props.hor)=="right" && (props.ver == "bottom")) ? "absolute bottom-3 right-3 " : "hidden"} z-10 h-auto w-auto`}>
            {arr.map((e) => {
            return (
                <div className={`${props.status=="success" ? "bg-green-500" : "bg-red-500"} shadow-2xl rounded-md px-3 py-1 mb-2`} key={e.id}>{e.message} <button className='border-black border-2 px-2' onClick={() => { handleDelete(e.id) }}>X</button></div>
            )
        })}
        </div>
    </>
    )
}

export default Message
