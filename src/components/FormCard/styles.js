import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: blue;
    display: ${ props => props.display === "block" ? "block" : "none" };
    opacity: ${ props => props.opacity === "1" ? "1" : "0" };
    transition: 0.4s;

    .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1% 2%;

        .close, .exclude, .confirm {
            cursor: pointer;
        }
    }
`;