const getTodos = async () => {
    const res = await fetch('http://localhost:8001/locations')
    return res.json()
}

export default getTodos
