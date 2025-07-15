import { NavBar } from "../../components/habits/navBar/navBar";

export const HabitsPage = () => { 
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString): null;
    return (
        <>
            <NavBar></NavBar>
            <div>
                <h1>Hola {user?.names} </h1>
            </div>
        </>
    )
}