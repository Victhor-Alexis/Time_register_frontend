import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: -9.3rem;
    left: ${props => props.number === 1 ? "-0.5rem" : "-10.4rem"};
    display: ${props => props.display === "block" ? "block" : "none"};
    transition: 0.6s;
    opacity: ${props => props.display === "block" ? () => "1" : "0"};

    svg:first-of-type{
        display: ${props => props.number === 1 ? "block" : "none"};
    }

    svg:last-of-type {
        display: ${props => props.number === 1 ? "none" : "block"};
    }
`;