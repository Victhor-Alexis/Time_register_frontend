import React from 'react'
import { useDynimicityContext } from '../../context/useDynimicityContext'
import { Container} from './styles'

const FormCard = () => {
    
    const { showForm, changeFormDisplay } = useDynimicityContext();

    return (
        <Container display={showForm[0]} opacity={showForm[1]}>
            
            <div className="options">
                <div className="confirm">
                    <svg width="71" height="53" viewBox="0 0 71 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.06066" y1="29.9393" x2="22.2739" y2="51.1525" stroke="white" strokeWidth="3"/>
                        <line x1="19.9393" y1="51.4368" x2="69.4368" y2="1.93933" stroke="white" strokeWidth="3"/>
                    </svg>
                </div>

                <div className="exclude">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_66_5)">
                            <path d="M39.2307 8.59688L37.9182 5.97188C37.8091 5.75542 37.6422 5.5734 37.4361 5.44599C37.2299 5.31857 36.9924 5.25073 36.7501 5.25H27.5626V2.625C27.5626 1.92881 27.286 1.26113 26.7937 0.768845C26.3014 0.276562 25.6337 0 24.9376 0L17.0626 0C16.3664 0 15.6987 0.276562 15.2064 0.768845C14.7141 1.26113 14.4376 1.92881 14.4376 2.625V5.25H5.25006C5.00768 5.25073 4.77024 5.31857 4.56406 5.44599C4.35787 5.5734 4.191 5.75542 4.08193 5.97188L2.76943 8.59688C2.66875 8.79668 2.62081 9.0189 2.63018 9.24244C2.63954 9.46598 2.70589 9.68341 2.82293 9.87409C2.93997 10.0648 3.10381 10.2224 3.29889 10.3319C3.49398 10.4415 3.71382 10.4993 3.93756 10.5H6.56256V39.375C6.52283 40.0482 6.74372 40.7109 7.17943 41.2256C7.44043 41.4893 7.75434 41.6946 8.10048 41.8281C8.44662 41.9616 8.81712 42.0202 9.18756 42H32.8126C33.5087 42 34.1764 41.7234 34.6687 41.2312C35.161 40.7389 35.4376 40.0712 35.4376 39.375V10.5H38.0626C38.2863 10.4993 38.5061 10.4415 38.7012 10.3319C38.8963 10.2224 39.0601 10.0648 39.1772 9.87409C39.2942 9.68341 39.3606 9.46598 39.3699 9.24244C39.3793 9.0189 39.3314 8.79668 39.2307 8.59688ZM17.0626 2.625H24.9376V5.25H17.0626V2.625ZM32.8126 39.375H9.18756V10.5H32.8126V39.375Z" fill="white"/>
                            <path d="M22.3125 34.125V13.125C21.6163 13.125 20.9486 13.4016 20.4563 13.8938C19.9641 14.3861 19.6875 15.0538 19.6875 15.75L19.7663 34.125H19.6875V36.75C20.3837 36.75 21.0514 36.4734 21.5437 35.9812C22.0359 35.4889 22.3125 34.8212 22.3125 34.125ZM28.875 34.125V13.125C28.1788 13.125 27.5111 13.4016 27.0188 13.8938C26.5266 14.3861 26.25 15.0538 26.25 15.75L26.3287 34.125H26.25V36.75C26.9462 36.75 27.6139 36.4734 28.1062 35.9812C28.5984 35.4889 28.875 34.8212 28.875 34.125ZM15.75 34.125V13.125C15.0538 13.125 14.3861 13.4016 13.8938 13.8938C13.4016 14.3861 13.125 15.0538 13.125 15.75L13.2038 34.125H13.125V36.75C13.8212 36.75 14.4889 36.4734 14.9812 35.9812C15.4734 35.4889 15.75 34.8212 15.75 34.125Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_66_5">
                            <rect width="42" height="42" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="close" onClick={() => changeFormDisplay(false)}>
                    <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.93934" y1="51.4368" x2="51.4368" y2="1.93933" stroke="white" strokeWidth="3"/>
                        <line x1="4.06066" y1="1.93934" x2="53.5581" y2="51.4368" stroke="white" strokeWidth="3"/>
                    </svg>
                </div>
            </div>

            <div className="subjectEdit">
                <input type="text" placeholder="Nome..."></input>
                <input type="text" placeholder="Quantidade de horas semanais..."></input>
                <input type="text" placeholder="Distribuição por dias..."></input>
            </div>

            <div className="wTimes">
                <h1>Horários:</h1>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>

                <div className="wTime">
                    <h2>Day:</h2>
                    <input type="text" placeholder="hh:mm"></input>
                    <p>até</p>
                    <input type="text" placeholder="hh:mm"></input>
                </div>
            </div>
        </Container>
    )
}

export default FormCard
