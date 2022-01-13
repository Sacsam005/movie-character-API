import React from 'react'
import Spinner from './img/spinner.gif'
import styled from 'styled-components';

const Loader = () => {
    return (
        <Center>
            <div className="spinner">
                <img src={Spinner} alt="Spinner" />
                <h1>Loading...</h1>
            </div>
        </Center>
    )
}

export default Loader

const Center = styled.div`
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 2rem;
`;