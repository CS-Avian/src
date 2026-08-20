export default function ArrayFun(props) {

    const item = props.fruits

    const listItems = item.map((fruit, index) => (
        <li key={index}>{fruit}</li>
    ))

    const sortitems=listItems.sort((a, b) => b-a)

    return (
        <>
            <ol>{listItems}</ol>

            <ol>{sortitems}</ol>

        </>
    )
}