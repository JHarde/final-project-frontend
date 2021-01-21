import React, {useState} from "react";

import {Container} from "components/StyledComponents"
import { CompletedTask } from 'components/CompletedTask'

export const Task1 = () => {
   
    const [answer, setAnswer] = useState()
    const [isCorrect, setIsCorrect] = useState(false)
    
    const handleOnClick = (answer) => {
        (answer === 'Svar 1') ? setIsCorrect(true) : setIsCorrect(false)
        setAnswer(answer)
    }
    console.log(isCorrect)

    return ( 
    <> {!answer &&
        <Container>
            <h1>Task 1</h1>
            <button onClick={() => handleOnClick('Svar 1')}>Svar 1</button>
            <button onClick={() => handleOnClick('Svar 2')}>Svar 2</button>
            <button onClick={() => handleOnClick('Svar 3')}>Svar 3</button>
        </Container>
        }
        {answer && <CompletedTask isCorrect={isCorrect} answer={answer}/>}
    </>
    )
}
