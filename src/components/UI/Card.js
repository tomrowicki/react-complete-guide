import "./Card.css"

// This is a typical wrapper component
function Card(props) {
    const classes = 'card ' + props.className; // adds classNames passed in through props

    // needed to inherit children's css
    return <div className={classes}>{props.children}</div>
}

export default Card;