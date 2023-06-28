import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'antd';

import ContactUs from '../shared/contactUs';

import './ourServices.css';

import service1 from '../../../assets/images/lp-s1.webp';
import service2 from '../../../assets/images/lp-s2.webp';
import service3 from '../../../assets/images/lp-s3.webp';
import service4 from '../../../assets/images/lp-s4.webp';

const OurServices = _ => {
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.from) {
      const type = location.state.type;

      if (type === 'CRM') {
        window.scrollTo(0, 0);
      } else {
        const serviceContainer = document.getElementById(`${type}-container`);
        serviceContainer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location?.state?.from, location?.state?.type]);

  return (
    <div>
      <div className='our-services'>
        <div className='slash-styled-head'>\ Our Services \</div>
        <div id='CRM-container'>
          <div className='blue-subhead mb32'>Salesforce CRM</div>
          <Row gutter={[80, 30]}>
            <Col className='ant-col-24' md={9}>
              <div className='service-image-container'>
                <img alt='sl-crm' src={service1} className='cm-img-class' />
              </div>
            </Col>
            <Col className='ant-col-24' md={14}>
              <div>
                <div className='blue-subhead mb16'>What we Offer</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>Development</li>
                    <li>Customization</li>
                    <li>Support & Data Migration</li>
                    <li>Business Consulting</li>
                    <li>Testing Services & QA</li>
                  </ul>
                </div>
              </div>
              <div className='mt48'>
                <div className='blue-subhead mb16'>Areas</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>Sales cloud</li>
                    <li>Service cloud </li>
                    <li>Marketing cloud</li>
                    <li>Experience cloud</li>
                    <li>Tableau CRM</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div id='SI-container' className='mt80'>
          <div className='blue-subhead mb32'>Systems Integrations</div>
          <Row gutter={[80, 30]}>
            <Col className='ant-col-24' md={9}>
              <div className='service-image-container'>
                <img alt='sl-crm' src={service2} className='cm-img-class' />
              </div>
            </Col>
            <Col className='ant-col-24' md={14}>
              <div>
                <div className='blue-subhead mb16'>What we Offer</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>Solution Designs</li>
                    <li>Development</li>
                    <li>Implementation</li>
                  </ul>
                </div>
              </div>
              <div className='mt48'>
                <div className='blue-subhead mb16'>Areas</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>SAP</li>
                    <li>Dynamics365</li>
                    <li>ADP</li>
                    <li>ADP, UKG</li>
                    <li>Oracle Micros</li>
                    <li>Cash Recycler CashComplete</li>
                    <li>CrunchTime and more</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div id='ROO-container' className='mt80'>
          <div className='blue-subhead mb32'>Resources Onshore/Offshore</div>
          <Row gutter={[80, 30]}>
            <Col className='ant-col-24' md={9}>
              <div className='service-image-container'>
                <img alt='sl-crm' src={service3} className='cm-img-class' />
              </div>
            </Col>
            <Col className='ant-col-24' md={14}>
              <div>
                <div className='blue-subhead mb16'>What we Offer</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>Qualified and Certified resource pool </li>
                    <li>Help you control IT costs</li>
                    <li>You can focus on your business</li>
                    <li>Short time to deploy new IT initiatives or technologies</li>
                    <li>Help you reduce risk with domain experts</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div id='AD-container' className='mt80'>
          <div className='blue-subhead mb32'>Applications Development</div>
          <Row gutter={[80, 30]}>
            <Col className='ant-col-24' md={9}>
              <div className='service-image-container'>
                <img alt='sl-crm' src={service4} className='cm-img-class' />
              </div>
            </Col>
            <Col className='ant-col-24' md={14}>
              <div>
                <div className='blue-subhead mb16'>What we Offer</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>Solution Designs</li>
                    <li>Development</li>
                    <li>Implementation</li>
                    <li>Life Cycle Services</li>
                    <li>Application Maintenance</li>
                    <li>Migration and Porting to Alternative Advances Platform</li>
                  </ul>
                </div>
              </div>
              <div className='mt48'>
                <div className='blue-subhead mb16'>Areas</div>
                <div className='offer-list-div'>
                  <ul className='offer-list'>
                    <li>Dynamic Websites</li>
                    <li>Mobile Applications</li>
                    <li>Custom Applciations</li>
                  </ul>
                </div>
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

export default OurServices;
