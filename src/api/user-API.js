export const Get = async (username) => {
    try {
        const user = await fetch(`https://noroff-api-tommy.herokuapp.com/trivia?username=${username}`)
            .then(res => res.json());
        return [null, ...user];
    } catch (error) {
        return [error.message, null]
    }
}