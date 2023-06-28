import { useNavigate } from 'react-router-dom';
import { Carousel, Row, Col, Button } from 'antd';

import ContactUs from '../shared/contactUs';

import './landingPage.css';

import carouselImage1 from '../../../assets/images/ci1.svg';

import carouselLeftIcon from '../../../assets/images/carousel-left-icon.png';
import carouselRightIcon from '../../../assets/images/carousel-right-icon.png';

import service1 from '../../../assets/images/lp-s1.webp';
import service2 from '../../../assets/images/lp-s2.webp';
import service3 from '../../../assets/images/lp-s3.webp';
import service4 from '../../../assets/images/lp-s4.webp';

const Landingpage = _ => {
  const navigate = useNavigate();

  const carouselImages = [
    {
      image: carouselImage1,
      title: 'Salesforce CRM',
      shortName: 'CRM'
    },
    {
      image: carouselImage1,
      title: 'Systems Integrations',
      shortName: 'SI'
    },
    {
      image: carouselImage1,
      title: 'Resources Onshore/ Offshore',
      shortName: 'ROO'
    },
    {
      image: carouselImage1,
      title: 'Applications Development',
      shortName: 'AD'
    }
  ];

  const redirectToService = type => {
    navigate('/our-services', { state: { from: 'view-more', type: type } });
  };

  const takeToFooterCallUs = _ => {
    const callUs = document.getElementById('call-us');
    callUs.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='landing-page'>
      <div className='carousel-section'>
        <Carousel
          autoplay
          arrows
          prevArrow={<img alt='cli' src={carouselLeftIcon} />}
          nextArrow={<img alt='cri' src={carouselRightIcon} />}
        >
          {carouselImages.map((imageObj, index) => (
            <div key={index}>
              <Row className='carousel-container'>
                <Col className='ant-col-24' md={2} />
                <Col className='ant-col-24' md={6}>
                  <div className='carousel-image-content-div'>
                    <div className='carousel-slash-styled-head'>\ We Help You In \</div>
                    <div className='carousel-service-title'>{imageObj.title}</div>
                    <div className='view-more-btn-div'>
                      {/* <Button className='view-more-btn' onClick={_ => redirectToService(imageObj.shortName)}>
                        View More
                      </Button> */}
                      <Button className='view-more-btn' onClick={takeToFooterCallUs}>
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col className='ant-col-24 flex-align-center' md={16}>
                  <div key={index} className='carousel-image-container'>
                    <img alt={`ci${index + 1}`} src={imageObj.image} className='cm-img-class' />
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
      <div className='landing-page-services-section'>
        <div className='lp-service'>
          <div className='slash-styled-head mb32'>\ Our Services \</div>

          <Row gutter={[30, 10]}>
            <Col className='ant-col-24' md={9}>
              <div className='lp-service-image-container'>
                <img alt='lp-service-image1' src={service1} className='cm-img-class' />
              </div>
            </Col>
            <Col className='ant-col-24 service-description-col' md={14}>
              <div className='service-description-div'>
                {/* <div className='service-keyword-text'>\ Service \</div> */}
                <div className='service-title'>Salesforce CRM</div>
                <div className='service-area-div mb16'>
                  <span className='service-subhead'>Areas:</span>{' '}
                  <span className='service-desc'>
                    Sales cloud, Service cloud, Marketing cloud, Experience cloud, Tableau CRM
                  </span>
                </div>
                <div className='services-offered-div'>
                  <span className='service-subhead'>Services:</span>{' '}
                  <span className='service-desc'>
                    Development, Customization, Implementation & Integration, Support & Data Migration, Business
                    Consulting, Testing Services & QA
                  </span>
                </div>
                <div className='view-more-btn-div'>
                  <Button className='view-more-btn' onClick={_ => redirectToService('CRM')}>
                    View More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='lp-service2'>
          <Row gutter={[30, 10]}>
            <Col className='ant-col-24 service-description-col' md={14}>
              <div className='service-description-div'>
                <div className='service-title'>Systems Integrations</div>
                <div className='service-area-div mb16'>
                  <span className='service-subhead'>Areas:</span>{' '}
                  <span className='service-desc'>
                    SAP, Dynamics365, ADP, UKG, Oracle Micros, Cash Recycler CashComplete, CrunchTime and more
                  </span>
                </div>
                <div className='services-offered-div'>
                  <span className='service-subhead'>Services:</span>{' '}
                  <span className='service-desc'>Solution design, development and implementation</span>
                </div>
                <div className='view-more-btn-div'>
                  <Button className='view-more-btn' onClick={_ => redirectToService('SI')}>
                    View More
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='ant-col-24' md={9}>
              <div className='lp-service-image-container'>
                <img alt='lp-service-image1' src={service2} className='cm-img-class' />
              </div>
            </Col>
          </Row>
        </div>
        <div className='lp-service3'>
          <Row gutter={[30, 10]}>
            <Col className='ant-col-24' md={9}>
              <div className='lp-service-image-container'>
                <img alt='lp-service-image1' src={service3} className='cm-img-class' />
              </div>
            </Col>
            <Col className='ant-col-24 service-description-col' md={14}>
              <div className='service-description-div'>
                <div className='service-title'>Resources Onshore/Offshore</div>
                <div className='service-area-div mb16'>
                  <span className='service-desc'>On-site dedicated, Off-site shared, Off-site dedicated</span>
                </div>
                <div className='view-more-btn-div'>
                  <Button className='view-more-btn' onClick={_ => redirectToService('ROO')}>
                    View More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='lp-service4'>
          <Row gutter={[30, 10]}>
            <Col className='ant-col-24 service-description-col' md={14}>
              <div className='service-description-div'>
                <div className='service-title'>Applications Development</div>
                <div className='service-area-div mb16'>
                  <span className='service-subhead'>Areas:</span>{' '}
                  <span className='service-desc'>Dynamic Websites, Mobiles and Custom Applications</span>
                </div>
                <div className='services-offered-div'>
                  <span className='service-subhead'>Services:</span>{' '}
                  <span className='service-desc'>Solution design, development and implementation</span>
                </div>
                <div className='view-more-btn-div'>
                  <Button className='view-more-btn' onClick={_ => redirectToService('AD')}>
                    View More
                  </Button>
                </div>
              </div>
            </Col>
            <Col className='ant-col-24' md={9}>
              <div className='lp-service-image-container'>
                <img alt='lp-service-image1' src={service4} className='cm-img-class' />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className='landing-page-contact-us-section'>
        <ContactUs />
      </div>
    </div>
  );
};

export default Landingpage;
