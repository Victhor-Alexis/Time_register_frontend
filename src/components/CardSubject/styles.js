import styled from 'styled-components'

export const Container = styled.div`
    width: 24.75%;
    height: 27vw;
    margin-bottom: 0.325%;
    background-color: red;
    
    h1 {
        color: white;
        font-size: 24px;
        font-weight: normal;
        text-align: center;
        margin: 0.75rem 0;
    }

    .edit {
        text-align: center;
        margin-top: 0.7rem;

        svg {
            cursor: pointer;
        }
    }

    .infoDays {
        text-align: center;
        margin-top: 1.5rem;
    }
`;

export const Daybox = styled.div`
    width: 10%;
    height: 2.4vw;
    border: 3px solid #fff;
    display: inline-block;
    margin: 0 0.2rem;
    color: white;
    text-align: center;
    position: relative;
    cursor: pointer;

    p {
        position: relative;
        top: 45%;
        transform: translateY(-50%);
    }

    InfoDate {
        display: none;
    }
`;