
import React from 'react'
import ButtonLink from '../components/ButtonLink'
import { useParams } from 'react-router-dom';
import '../styles/Vacancies.css'
import VacCard from '../components/VacCard';

const Vacancy = (props)=>{

    const {vacId} = useParams();
    console.log(vacId)
    React.useEffect(()=>{
        console.log("тут должен быть запрос на бек")
    },[])
    return(
        <VacCard/>
    )
}




export default Vacancy