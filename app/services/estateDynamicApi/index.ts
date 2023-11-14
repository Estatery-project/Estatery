async function getDynamicData(id: any) {
    try {
        const res = await fetch(`http://localhost:8000/estates/${id}`);
        
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await res.json(); 
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default getDynamicData;