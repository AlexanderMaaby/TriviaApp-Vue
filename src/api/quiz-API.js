//https://opentdb.com/api.php?amount=10&category=21&difficulty=easy


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
