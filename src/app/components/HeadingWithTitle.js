
export default function HeadingWithTitle({ cancel = false, heading = "Heading here", title = 'Title here' }) {
    

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="headingWithTitle_container padding_bottom_30">
            {cancel && <p className="cancel__tag" onClick={goBack}>Cancel</p>}
            <h1 className="heading">{heading}</h1>
            <p className="title" >{title}</p>
        </div>
    )
}
