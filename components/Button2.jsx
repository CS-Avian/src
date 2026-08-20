export default function button2() {

    const btn = {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '5px',
            cursor: 'pointer'
        }

    return(
        <>
        <button style={btn}>Click Me</button>
        <br />
        </>
    )
}