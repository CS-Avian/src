export default function Array() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
    return (
        <>  
            <h1>{fruits}</h1>
            <hr />
            <h2>Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    )
}