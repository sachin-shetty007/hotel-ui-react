import './propertyList.css'
import Hotel10 from '../../images/Hotel10.jpg'

const PropertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src={Hotel10} alt='' className='pListImg'/>
        <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>081 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel10} alt='' className='pListImg'/>
        <div className='pListTitles'>
            <h1>Appartments</h1>
            <h2>180 Appartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel10} alt='' className='pListImg'/>
        <div className='pListTitles'>
            <h1>Resorts</h1>
            <h2>280 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel10} alt='' className='pListImg'/>
        <div className='pListTitles'>
            <h1>Villas</h1>
            <h2>081 Villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Hotel10} alt='' className='pListImg'/>
        <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>081 Hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
