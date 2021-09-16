const apiURL = 'https://noroff-api-tommy.herokuapp.com/trivia'
const apiKey = 'lRpvB7uCj9W2rpG5VKfwojkIN09wTgnZR2FJCokM32yjb1Kc46avOtVe6lUASEYh'

export const Get = async (username) => {
    try {
        const user = await fetch(`https://noroff-api-tommy.herokuapp.com/trivia?username=${username}`)
            .then(res => res.json());
        return [null, ...user];
    } catch (error) {
        return [error.message, null]
    }
}
export const Post = async (username) => {
    try {
        const [error, user] = await fetch(`${apiURL}`, {
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
        console.log(error + " - " + user)
        return [null, user]
    }
    catch (error) {
        return [error, null]
    }
}