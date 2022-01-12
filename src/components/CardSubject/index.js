import React, { useState } from 'react'
import { useDynimicityContext } from '../../context/useDynimicityContext'
import InfoDate from '../InfoDate'
import Timebar from '../Timebar'
import { Container, Daybox } from './styles'

const CardSubject = () => {

    const [dpInfoDate, setDpInfoDate] = useState(["none", "none", 
    "none", "none", "none", "none", "none"])

    const { changeFormDisplay } = useDynimicityContext();

    return (
        <Container>
            <Timebar/>
            <h1>Name</h1>
            <div className="infoTime">
                <h1>Horas restantes: 10</h1>
                <h1>Horas contabilizadas: 10</h1>
            </div>

            <div className="infoDays">
                <Daybox onMouseEnter={() => setDpInfoDate(["block", "none", 
                        "none", "none", "none", "none", "none"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <p>D</p>
                    <InfoDate display={dpInfoDate[0]} number={1} />
                </Daybox>
                <Daybox onMouseEnter={() => setDpInfoDate(["none", "block", 
                        "none", "none", "none", "none", "none"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <p>S</p>
                    <InfoDate display={dpInfoDate[1]} number={1}/>
                </Daybox>
                <Daybox onMouseEnter={() => setDpInfoDate(["none", "none", 
                        "block", "none", "none", "none", "none"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <p>T</p>
                    <InfoDate display={dpInfoDate[2]} number={1}/>
                </Daybox>
                <Daybox onMouseEnter={() => setDpInfoDate(["none", "none", 
                        "none", "block", "none", "none", "none"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <p>Q</p>
                    <InfoDate display={dpInfoDate[3]} number={1}/>
                </Daybox>
                <Daybox onMouseEnter={() => setDpInfoDate(["none", "none", 
                        "none", "none", "block", "none", "none"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <p>Q</p>
                    <InfoDate display={dpInfoDate[4]}/>
                </Daybox>
                <Daybox onMouseEnter={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "block", "none"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <p>S</p>
                    <InfoDate display={dpInfoDate[5]}/>
                </Daybox>
                <Daybox onMouseEnter={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "block"])} 
                        onMouseLeave={() => setDpInfoDate(["none", "none", 
                        "none", "none", "none", "none", "none"])}>
                    <InfoDate display={dpInfoDate[6]}/>
                    <p>S</p>
                </Daybox>
            </div>

            <div className="edit">
                <svg onClick={() => changeFormDisplay(true)} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M45.976 10.2133C46.4503 10.7375 46.6971 11.4286 46.6621 12.1346C46.6271 12.8407 46.3132 13.504 45.7893 13.9787L18.3093 38.84L17.032 42.6667H20.3013L48.872 16.6933C49.3954 16.2174 50.0864 15.9688 50.793 16.0023C51.4996 16.0358 52.164 16.3486 52.64 16.872C53.116 17.3954 53.3645 18.0864 53.331 18.793C53.2975 19.4996 52.9847 20.164 52.4613 20.64L23.128 47.3067C22.6369 47.7531 21.997 48.0003 21.3333 48H13.3333C12.9108 48.0001 12.4943 47.8998 12.1181 47.7073C11.7419 47.5149 11.4169 47.2358 11.1697 46.8931C10.9226 46.5504 10.7604 46.1538 10.6966 45.7361C10.6328 45.3184 10.6691 44.8916 10.8027 44.4907L13.4693 36.4907C13.6144 36.0544 13.8698 35.6631 14.2107 35.3547L42.2107 10.0213C42.7352 9.54733 43.4265 9.30101 44.1325 9.33651C44.8386 9.37202 45.5017 9.68644 45.976 10.2107V10.2133ZM10.6667 56C10.6667 55.2928 10.9476 54.6145 11.4477 54.1144C11.9478 53.6143 12.6261 53.3333 13.3333 53.3333H50.6667C51.3739 53.3333 52.0522 53.6143 52.5523 54.1144C53.0524 54.6145 53.3333 55.2928 53.3333 56C53.3333 56.7072 53.0524 57.3855 52.5523 57.8856C52.0522 58.3857 51.3739 58.6667 50.6667 58.6667H13.3333C12.6261 58.6667 11.9478 58.3857 11.4477 57.8856C10.9476 57.3855 10.6667 56.7072 10.6667 56Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M42.1147 10.1147C42.6148 9.61475 43.2929 9.33391 44 9.33391C44.7071 9.33391 45.3853 9.61475 45.8854 10.1147L52.552 16.7813C53.0378 17.2843 53.3066 17.9579 53.3005 18.6571C53.2944 19.3563 53.014 20.0251 52.5195 20.5195C52.0251 21.0139 51.3563 21.2944 50.6571 21.3005C49.9579 21.3065 49.2843 21.0378 48.7814 20.552L42.1147 13.8853C41.6148 13.3853 41.3339 12.7071 41.3339 12C41.3339 11.2929 41.6148 10.6147 42.1147 10.1147ZM40.7814 25.8853L34.1147 19.2187L37.8854 15.448L44.552 22.1147L40.7814 25.8853Z" fill="white"/>
                </svg>
            </div>
        </Container>
    )
}

export default CardSubject
