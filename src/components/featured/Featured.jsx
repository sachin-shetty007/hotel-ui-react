import './featured.css'
import Hotel1 from '../../images/Hotel1jpg.jpg'
import Hotel5 from '../../images/Hotel5jpg.jpg'

const Featured = () => {
    return (
        <>
            <div className='featured'>
                <div className="featuredItem">
                    <img src={Hotel1} alt='' className='featuredImg' />
                    <div className='featuredTitles'>
                        <h1>SACHIN</h1>
                        <h2>007</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={Hotel5} alt='' className='featuredImg' />
                    <div className='featuredTitles'>
                        <h1>ROHIT</h1>
                        <h2>045</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src={Hotel1} alt='' className='featuredImg' />
                    <div className='featuredTitles'>
                        <h1>SHIVU</h1>
                        <h2>001</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
