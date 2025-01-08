
function Card(props){
    return(
        <>
            <div className="card">
                <img src={props.imgsrc} alt="Image_Not_Found"></img>
                <div>
                    <h3>{props.title}</h3>                    
                    <a href={props.link} target="__blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;