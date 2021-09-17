
export async function getCategories() {
    try {
        const { trivia_categories } = await fetch("https://opentdb.com/api_category.php")
            .then(res => res.json());
        return [null, trivia_categories];
    }
    catch(error) {
        return [error, null]
    }
}

const encoding = "&encode=url3986";
const QUIZ_API = "https://opentdb.com/api.php?amount="

export async function getQuestions(amount, settingsString) {
    try {
        const { results } = await fetch(QUIZ_API + `${amount}` + settingsString + encoding)
            .then(res => res.json());
        return [null, results];
    }
    catch(error) {
        return [error, null]
    }
}