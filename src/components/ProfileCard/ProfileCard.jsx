import "./styles.css";

function Card() {

    const userData = {
        avatar: "https://preview.redd.it/trying-to-come-up-with-a-new-avatar-for-my-various-social-v0-i3kyoe6e1lsb1.jpg?width=519&format=pjpg&auto=webp&s=af4100e59c80d5e8847b64f0ca68fa76e36547e5",
        userName: "Foxy",
        occupation: "Hacker",
        hobbies: ["Computers", "Cameras"]
    }
    
        return (
        <div className="card">
            <div className="info">
            <img className="img" src={userData.avatar}></img>
            
            <h3>Name: {userData.userName}</h3>
            <p>Occupation: {userData.occupation}</p>
            <p>Hobbies: {userData.hobbies[0]}</p>
            </div>
        </div>
    );
    }
    
    export default Card;