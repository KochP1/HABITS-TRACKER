export const HabitsPage = () => { 
    const userString = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString): null;
    return (
        <div>
            <h1>Hola {user?.names} </h1>
        </div>
    )
}