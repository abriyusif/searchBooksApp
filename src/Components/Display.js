import './Style.css'
const Display = (props) => {
        
    return (
        <div className="display">
            <img src={props.image} alt="" />
            <div>
                <h3>{props.title}</h3>
                <h2>Author: {props.author}</h2>
                
                {/* <h5> {props.description}</h5> */}
                <p>Published Date: {props.published}</p>
                <button onClick={props.description}>Read More</button>
            </div>
        </div>
    )

}

export default Display