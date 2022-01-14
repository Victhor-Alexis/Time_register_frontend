import styled from 'styled-components'

export const Container = styled.form`
    width: 100%;
    height: 100%;
    position: fixed;
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

    .subjectEdit {
        width: 100%;
        margin-top: 1.5rem;

        input {
            width: 35%;
            display: block;
            padding: 1rem;
            margin: 1rem auto;
            background: none;
            font-size: 24px;
            border: 2px solid #fff;
            color: white;

            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #fff;
                opacity: 0.7;
            }

            :focus {
                outline: 2px solid #999;
            }
        }
    }

    .wTimes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: white;
        margin: 3rem auto 0 auto;

        h1 {
            width: 100%;
            text-align: center;
            margin-bottom: 1rem;
        }

        .wTime {
            display: flex;
            align-items: center;
            margin: 1rem 2rem;

            input {
                background: none;
                border: 2px solid #fff;
                color: white;
                width: 4rem;
                padding: 0.5rem;
                margin: 0 0.6rem;

                ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: #fff;
                    opacity: 0.8;
                }
                
                :focus {
                    outline: 2px solid #999;
                }
            }
        }
    }
`;