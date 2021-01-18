import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'components/StyledComponents'

export const Start = () => {
    return (

        <Container>
            <h1>Hej!</h1>
            <p>Superkort information om spelet och klimatet</p>
            <Link to="/task1"><button>Börja spela</button></Link>
            <button>Se topplista</button>
        </Container>

    )
}