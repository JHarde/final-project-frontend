import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'components/StyledComponents'


export const Start = () => {
    return (
        <Container>
            <h1>Hej!</h1>
            <p>Superkort information om spelet och klimatet</p>

            {/* Fix semantic/accessibility */}
            <Link to="/gameboard">
                <button>Börja spela</button>
            </Link> 
            <Link to="/highscore">
            <button>Se topplista</button>
            </Link>
            
        </Container>

    )
}