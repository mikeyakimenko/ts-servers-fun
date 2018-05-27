// let fetch

export async function getServersList() {
    return await fetch('http://localhost:3001/items/?_limit=20&_page=1')
        .then(response => {
            if (response.status !== 200) {
                throw new Error("No data by API")
            } else {
                return response.json()
            }
        })
}
