import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Hotel9 from '../../images/Hotel9.jpg'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1QGLH3z5n6RQbzT_nHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=fine+pics+for+pc+in+jpg+format&type=type80260-3468007126&param1=1396852547&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=20&iurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F713%2F864%2Fdesktop-wallpaper-i-m-fine-bts-aesthetic-im-fine.jpg&action=click"
    },
    {
      src: "https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1QGLH3z5n6RQbzT_nHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=fine+pics+for+pc+in+jpg+format&type=type80260-3468007126&param1=1396852547&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=20&iurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F713%2F864%2Fdesktop-wallpaper-i-m-fine-bts-aesthetic-im-fine.jpg&action=click"
    },
    {
      src: "https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1QGLH3z5n6RQbzT_nHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=fine+pics+for+pc+in+jpg+format&type=type80260-3468007126&param1=1396852547&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=20&iurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F713%2F864%2Fdesktop-wallpaper-i-m-fine-bts-aesthetic-im-fine.jpg&action=click"
    },
    {
      src: "https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1QGLH3z5n6RQbzT_nHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=fine+pics+for+pc+in+jpg+format&type=type80260-3468007126&param1=1396852547&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=20&iurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F713%2F864%2Fdesktop-wallpaper-i-m-fine-bts-aesthetic-im-fine.jpg&action=click"
    },
    {
      src: "https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1QGLH3z5n6RQbzT_nHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=fine+pics+for+pc+in+jpg+format&type=type80260-3468007126&param1=1396852547&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=20&iurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F713%2F864%2Fdesktop-wallpaper-i-m-fine-bts-aesthetic-im-fine.jpg&action=click"
    },
    {
      src: "https://in.images.search.yahoo.com/yhs/search;_ylt=Awr1QGLH3z5n6RQbzT_nHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=fine+pics+for+pc+in+jpg+format&type=type80260-3468007126&param1=1396852547&hsimp=yhs-002&hspart=sz&ei=UTF-8&fr=yhs-sz-002#id=20&iurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F713%2F864%2Fdesktop-wallpaper-i-m-fine-bts-aesthetic-im-fine.jpg&action=click"
    },
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
          <div className='sliderWrapper'>
            <img src={photos[slideNumber]} alt='' className='sliderImg' />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">
            Grand Hotel
          </h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span><br />
          <span className='hotelPriceHighlight'>
            Book a stay over Rs.1250 at this rate property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div key={index} className='hotelImgWrapper'>
                <img onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt={`Hotel ${index + 1}`}
                  className='hotelImg' />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDeatilsTexts">
              <h1>
                The Best of Bangalore
              </h1>
              <p>
                Click here to see more hotels and accommodations near popular landmarks in Bangalore
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 6-night stay</h1>
              <span>
                Located in real heart of karkow, this propert has been excellent
                location score of 9.9!
              </span>
              <h2>
                <b>Rs.1119</b> (6-nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
