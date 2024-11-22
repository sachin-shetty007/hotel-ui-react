import Hotel9 from "../../images/Hotel9.jpg"
import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={Hotel9}
                alt=""
                className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle"> Tower Street Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio .1 bathroom . 21m² 1 full bed </span>
                <span className="siCancelOp">Free cancellaton</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today! </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span >Excellent</span>
                    <button >8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">Rs 1000</span><br/>
                    <span className="siTaxOp">Includes taxes and fees</span><br/>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
