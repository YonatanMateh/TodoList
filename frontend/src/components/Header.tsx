import React, { useState } from 'react'

interface IHeader {
    addTask: (text: string) => void;
}

const Header = (props: IHeader): JSX.Element => {
    const [inputVal, setInputVal] = useState<string>("");
    const addTask = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (inputVal !== "") {
            props.addTask(inputVal);
            setInputVal("")
        }
    }
    return (
        <form className="form-container">
            <input
                className="goal-input"
                type="text"
                placeholder="Add new goal"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)} />
            <button
                className="submit-btn"
                type="submit"
                onClick={(e) => addTask(e)}>
                Add</button>
        </form>
    )
}

export default Header
