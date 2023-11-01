async function getData() {
    const res = await fetch('http://localhost:8000/estatesRoute')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = res.json()
    return data
}

export default getData
