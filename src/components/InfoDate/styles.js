import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: -9.3rem;
    left: ${props => props.number === 1 ? "-0.5rem" : "-10.4rem"};

    svg:first-of-type{
        display: ${props => props.number === 1 ? "block" : "none"};
    }

    svg:last-of-type {
        display: ${props => props.number === 1 ? "none" : "block"};
    }
`;