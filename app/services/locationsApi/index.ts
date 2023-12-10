const getTodos = async () => {
    const res = await fetch('https://estate-api-0bne.onrender.com/locations')
    return res.json()
}

export default getTodos
