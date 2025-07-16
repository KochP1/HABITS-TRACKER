import { NavBar } from "../../../components/habits/navBar/navBar";
import { Modal } from "../../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './habit.page.css'

export const HabitsPage = () => { 
    const navigate = useNavigate();
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString): null;

    const [ modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    return (
        <>
            <NavBar modal={toggleModal}></NavBar>
            <div>
                <h1>Hola {user?.names} </h1>
            </div>

            <Modal modulo="Create Habit" toggle={toggleModal} modal={modal}>
                <div className="habit-choices__wrapper">
                    <button className="habit-choice__button" onClick={() => navigate('/habit')}>
                        <h2>Yes or no</h2>
                        <p>Did you exercise?</p>
                    </button>

                    <button className="habit-choice__button">
                        <h2>Measurable</h2>
                        <p>How many miles did you run today?</p>
                    </button>
                </div>
            </Modal>
        </>
    )
}