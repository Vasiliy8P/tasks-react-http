export const MaterialsList = ({materials, onDelete }) => {
    return (
        <ul>
            {materials.map(material => (
                <li key={material.id}>
                    <p style={{margin: "0"}}><b>Title:</b> {material.title}</p>
                    <p style={{margin: "0"}}><b>Link:</b> {material.link}</p>    
                    <button
                        type='button'
                        onClick={() => onDelete(material.id)}
                    >Delete</button>
                    <hr />
                </li>
            ))}
        </ul>        
    )
}