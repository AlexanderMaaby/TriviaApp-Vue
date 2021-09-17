const apiURL = 'https://noroff-api-tommy.herokuapp.com/trivia'
const apiKey = 'lRpvB7uCj9W2rpG5VKfwojkIN09wTgnZR2FJCokM32yjb1Kc46avOtVe6lUASEYh'

export const get = async (username) => {
    try {
        const [user] = await fetch(`https://noroff-api-tommy.herokuapp.com/trivia?username=${username}`)
            .then(res => res.json());
 
        if(user) {
            return [null, user];
        } 
        return [null, null]; 
    } catch (error) {
        return [error.message, null]
    }
}

export const post = async (username) => {
    try {
        const user = await fetch(`${apiURL}`, {
            method: 'POST',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                highScore: 0
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not create new user')
            }
            return response.json()
        })
        return [null, user]
    }
    catch (error) {
        return [error, null]
    }
}

export const patch = async (user, newScore) => {
    try {
        let userScoreName = user.highScore !== null ? "highScore" : "score";
        const userUpdated = await fetch(apiURL + `/${user.id}`, {
            method: "PATCH",
            headers: {
                "X-API-Key": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ [userScoreName]: newScore})
        })
        .then(res => {
            if(!res.ok) {
                throw new Error("Could not update high score");
            }
            return res.json();
        });
        return [null, userUpdated]
    } catch (error) {
        return [error, null];
    }
}