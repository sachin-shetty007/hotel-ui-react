import './featuredProperties.css'
import Hotel9 from '../../images/Hotel9.jpg'

const FeaturedProperties = () => {
    return (
        <>
            <div className='fp'>
                <div className='fpItem'>
                    <img src={Hotel9} alt='' className='fpImg' />
                    <span className="fpName">ApartHotel Star Sun</span>
                    <span className="fpCity">Banglore</span>
                    <span className="fpPrice">Starting from Rs.1052</span>
                    <div className='fpRating'>
                        <button> 9.1</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className='fpItem'>
                    <img src={Hotel9} alt='' className='fpImg' />
                    <span className="fpName">ApartHotel Star Sun</span>
                    <span className="fpCity">Banglore</span>
                    <span className="fpPrice">Starting from Rs.1052</span>
                    <div className='fpRating'>
                        <button> 9.1</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className='fpItem'>
                    <img src={Hotel9} alt='' className='fpImg' />
                    <span className="fpName">ApartHotel Star Sun</span>
                    <span className="fpCity">Banglore</span>
                    <span className="fpPrice">Starting from Rs.1052</span>
                    <div className='fpRating'>
                        <button> 9.1</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className='fpItem'>
                    <img src={Hotel9} alt='' className='fpImg' />
                    <span className="fpName">ApartHotel Star Sun</span>
                    <span className="fpCity">Banglore</span>
                    <span className="fpPrice">Starting from Rs.1052</span>
                    <div className='fpRating'>
                        <button> 9.1</button>
                        <span>Excellent</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProperties
