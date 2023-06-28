// import React, { useEffect } from 'react';
import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import constants from '../../../../utils/constants';

import './footer.css';

import footerLogo from '../../../../assets/images/footer-logo.webp';
import linkedInIcon from '../../../../assets/images/lnkdin.png';
// import instaIcon from '../../../../assets/images/insta.png';
// import facebookIcon from '../../../../assets/images/fcb.png';
// import twitterIcon from '../../../../assets/images/twtr.png';

const { SOCIAL_MEDIA_HANDLES } = constants();


const Footer = _ => {

  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() {
  //     window.dataLayer.push(arguments);
  //   }
  //   gtag('js', new Date());
  //   gtag('config', 'AW-11205520363');
  // }, []); 


  return (
    <>
        {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11205520363">
        </script> */}

    <div>   
      <footer>
        <section>
          <div className='footer'>
            <Row>
              <Col className='ant-col-24 flex-align-left' md={10}>
                <div className='text-align-left mb-20'>
                  <div className='footer-logo-container'>
                    <img alt='logo' src={footerLogo} className='cm-img-class' />
                  </div>
                  <div className='foot-content foot-cont-pad'>
                    We are a Canadian company providing Information Technology solutions and services. Our goal is to
                    help organizations in digitizing their business processes to increase overall efficiencies and
                    improvements.
                  </div>
                </div>
              </Col>
              <Col className='ant-col-24 ant-col-sm-12 ant-col-lg-7 m-20 foot-flex-align-center' md={7}>
                <div className='mb-20'>
                  <div className='foot-title'>Services</div>
                  <div>
                    <div className='foot-content'>Salesforce CRM</div>
                  </div>
                  <div>
                    <div className='foot-content'>Systems Integrations</div>
                  </div>
                  <div>
                    <div className='foot-content'>Resources Onshore/Offshore</div>
                  </div>
                  <div>
                    <div className='foot-content'>Applications Development</div>
                  </div>
                </div>
              </Col>
              <Col className='ant-col-24 ant-col-sm-12 ant-col-lg-7 m-20 foot-flex-align-center' md={7}>
                <div className='mb-20'>
                  <div className='foot-title'>Company</div>
                  <div>
                    <Link to='/about-us'>
                      <div className='foot-content'>About Us</div>
                    </Link>
                  </div>
                  <div>
                    <Link to='/contact-us'>
                      <div className='foot-content'>Contact Us</div>
                    </Link>
                  </div>
                  {/* <div>
                    <div className='foot-content'>Privacy Policy</div>
                  </div>
                  <div>
                    <div className='foot-content'>Terms of Service</div>
                  </div> */}
                </div>
              </Col>
              <Col className='ant-col-24' sm={24} md={10}>
                <Row gutter={[0, 20]} className='mt16'>
                  <Col className='ant-col-24' xs={6} sm={6} md={6}>
                    <a href={SOCIAL_MEDIA_HANDLES.LINKEDIN} target='_blank' rel='noreferrer'>
                      <img alt='lnkdin' src={linkedInIcon} />
                    </a>
                  </Col>
                  {/* <Col className='ant-col-24' xs={10} sm={6} md={6}>
                    <img src={instaIcon} alt='' />
                  </Col>
                  <Col className='ant-col-24' xs={10} sm={6} md={6}>
                    <img src={facebookIcon} alt='' />
                  </Col>
                  <Col className='ant-col-24' xs={10} sm={6} md={6}>
                    <img src={twitterIcon} alt='' />
                  </Col> */}
                </Row>
              </Col>
            </Row>
          </div>
        </section>
      </footer>
    </div>
    </>
  );
};
export default Footer;
