import React, { useState } from "react";
import { useSelector } from 'react-redux'

import { Container } from "components/StyledComponents"
import { CompletedTask } from 'components/CompletedTask'

export const Task1 = () => {

    const question = useSelector(store => store.game.questions[0])
    const [answer, setAnswer] = useState()
    const [isCorrect, setIsCorrect] = useState(false)
    
    const handleOnClick = (answer) => {
        (answer === question.correctAnswer[0]) ? setIsCorrect(true) : setIsCorrect(false)
        setAnswer(answer)
        //Send answer to redux and/or backend
    }

    return ( 
    <> {!answer &&
        <Container>
            <h1>{question.question}</h1>
            <p>{question.description}</p>
            {question.answers.map((answer) => {
                return <button key={answer.id} onClick={() => handleOnClick(answer.id)}>{answer.answer}</button>
            })}
        </Container>
        }
        {answer && 
        <CompletedTask 
        isCorrect={isCorrect} 
        answer={answer} 
        setAnswer={setAnswer}
        why={question.why}/>}
    </>
    )
}
