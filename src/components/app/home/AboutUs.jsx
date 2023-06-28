import { Row, Col } from 'antd';

import ContactUs from '../shared/contactUs';

import './aboutUs.css';

import aboutUsImage from '../../../assets/images/about-us.webp';
import supportIcon from '../../../assets/images/contact-support.png';
import visionIcon from '../../../assets/images/vision.png';
import missionIcon from '../../../assets/images/mission.png';
import dottedBorder from '../../../assets/images/dotted-border.png';

const AboutUs = _ => {
  return (
    <div className='about-us'>
      <div className='about-us-section'>
        <Row gutter={[30, 10]}>
          <Col className='ant-col-24 about-us-image-col' md={9}>
            <div className='lp-service-image-container'>
              <img alt='lp-service-image1' src={aboutUsImage} className='cm-img-class' />
            </div>
          </Col>
          <Col className='ant-col-24 service-description-col' md={14}>
            <div className='service-description-div'>
              <div className='service-keyword-text'>\ About Us \</div>
              <div className='service-title'>Who we are</div>
              <div className='service-area-div mb16'>
                <span className='service-desc'>
                  <p>
                    We are a Canadian company providing Information Technology solutions and services. Our goal is to
                    help organizations in digitizing their business processes to increase overall efficiencies and
                    improvements.
                  </p>
                  <p>
                    We ensure that our customers achieve significant business benefits by partnering with us in their
                    digital journey. We can assist with your digital strategy and planning and validate the objectives
                    are well defined and achievable in a cost-effective way.
                  </p>
                  <p>
                    Our solutions and service delivery standards are designed to achieve higher level of productivity,
                    efficiency, reliability and security with a proven global delivery standards.
                  </p>
                </span>
              </div>
              <div className='contact-us-card-div'>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Row>
                      <Col className='ant-col-24' sm={6} md={3}>
                        <img alt='call' src={supportIcon} />
                      </Col>
                      <Col className='ant-col-24 contact-details-other-col' sm={18} md={21}>
                        <div className='contact-detail-other-head'>Contact Us</div>
                        <div className='contact-detail-other-subhead'>
                          Ready to Help : <span className='contact-detail-other-value'>+1 (437)-324-4022</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='vision-mission-section'>
        <Row gutter={[40, 20]}>
          <Col className='ant-col-24' md={12}>
            <div className='vision-div'>
              <div>
                <img alt='vision' src={visionIcon} />
              </div>
              <div className='vision-text'>OUR VISION</div>
              <div>
                <img alt='border' src={dottedBorder} />
              </div>
              <div className='vision'>To become the leading Digital Transformation Solutions and Services provider</div>
            </div>
          </Col>
          <Col className='ant-col-24' md={12}>
            <div className='vision-div'>
              <div>
                <img alt='vision' src={missionIcon} />
              </div>
              <div className='vision-text'>OUR MISSION</div>
              <div>
                <img alt='border' src={dottedBorder} />
              </div>
              <div className='vision'>
                To help our clients improve their business processes via technology, this will in turn enable them to be
                leaders in their field
              </div>
            </div>
          </Col>
        </Row>
        <div className='our-values-section'>
          <div className='our-values-head vision-text'>OUR VALUES</div>
          <Row gutter={[30, 20]}>
            <Col className='ant-col-24' md={6}>
              <div className='our-values-div'>
                <div className='vision-text'>Integrity</div>
                <div>
                  <img alt='border' src={dottedBorder} />
                </div>
                <div className='our-value'>We operate with full transparency in all aspects of our relationships.</div>
              </div>
            </Col>
            <Col className='ant-col-24' md={6}>
              <div className='our-values-div'>
                <div className='vision-text'>Care</div>
                <div>
                  <img alt='border' src={dottedBorder} />
                </div>
                <div className='our-value'>We deeply care about our employees, customers and partners.</div>
              </div>
            </Col>
            <Col className='ant-col-24' md={6}>
              <div className='our-values-div'>
                <div className='vision-text'>Committed</div>
                <div>
                  <img alt='border' src={dottedBorder} />
                </div>
                <div className='our-value'>
                  We are committed to fulfil the promise given, by focusing and ensuring value delivery.
                </div>
              </div>
            </Col>
            <Col className='ant-col-24' md={6}>
              <div className='our-values-div'>
                <div className='vision-text'>Together</div>
                <div>
                  <img alt='border' src={dottedBorder} />
                </div>
                <div className='our-value'>
                  We work for a common purpose with a shared vision and collaborative model.
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

export default AboutUs;
