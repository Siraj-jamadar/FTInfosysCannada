import { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import axios from 'axios';

import constants from '../../../../utils/constants';

import './contactUs.css';

import callIcon from '../../../../assets/images/contact-call.png';
import msgIcon from '../../../../assets/images/contact-msg.png';
import locationIcon from '../../../../assets/images/contact-loc.png';

import linkedInIcon from '../../../../assets/images/contact-lnkdin.png';
// import instaIcon from '../../../../assets/images/contact-insta.png';
// import facebookIcon from '../../../../assets/images/contact-fcb.png';
// import twitterIcon from '../../../../assets/images/contact-twtr.png';

const { useForm } = Form;
const { API_END_POINTS, SUCCESS_MESSAGE_TIMER, ERROR_MESSAGE_TIMER, SOCIAL_MEDIA_HANDLES } = constants();

const SharedContactUs = _ => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const checkPhoneLength = e => {
    const { value, maxLength } = e.target;
    if (String(value).length >= maxLength) {
      e.preventDefault();
      return;
    }
  };

  const sendNow = payload => {
    return new Promise(async (res, rej) => {
      try {
        setIsLoading(true);
        const response = await axios.post(API_END_POINTS.CONTACT_US, payload);
        if (response.data.success) {
          message.destroy();
          message.success('Your request has been sent successfully!', SUCCESS_MESSAGE_TIMER);
          setIsLoading(false);
          form.resetFields();
          res(true);
        }
      } catch (err) {
        message.destroy();
        message.error('Sorry could not send your request!', ERROR_MESSAGE_TIMER);
        setIsLoading(false);
        rej(false);
      }
    });
  };

  const onFinish = values => {
    sendNow(values);
  };

  return (
    <div id='call-us' className='shared-contact-us'>
      <div className='main-section'>
        <div className='slash-styled-head'>\ Contact Us \</div>
        <div className='hey-lets-talk-head'>Let's Talk</div>
        <div className='form-section'>
          <Row gutter={[30, 30]}>
            <Col className='ant-col-24' md={12} lg={16}>
              <Form form={form} onFinish={onFinish}>
                <Row gutter={[20, 10]}>
                  <Col className='ant-col-24' md={12}>
                    <Form.Item name='fName' rules={[{ required: true, message: 'Please enter your First Name' }]}>
                      <Input placeholder='First Name' />
                    </Form.Item>
                  </Col>
                  <Col className='ant-col-24' md={12}>
                    <Form.Item name='lName' rules={[{ required: true, message: 'Please enter your Last Name' }]}>
                      <Input placeholder='Last Name' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item
                      name='email'
                      rules={[
                        { required: true, message: 'Please enter your Email' },
                        { type: 'email', message: 'Please enter a valid Email Id' }
                      ]}
                    >
                      <Input placeholder='Email' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item name='phone' rules={[{ required: true, message: 'Please enter your Phone Number' }]}>
                      <Input type='number' placeholder='Phone' maxLength={10} onKeyPress={checkPhoneLength} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row className='text-area-row'>
                  <Col className='ant-col-24' md={24}>
                    <Form.Item name='message' rules={[{ required: true, message: 'Please enter your Message' }]}>
                      <Input.TextArea placeholder='Your Message' rows={5} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row className='text-area-row'>
                  <Col className='ant-col-24' md={24}>
                    <Button className='send-now-btn' htmlType='submit' disabled={isLoading}>
                      Send Now
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col className='ant-col-24' md={12} lg={8}>
              <div className='contact-details-section'>
                <Row className='mb20'>
                  <Col className='ant-col-24' sm={7} md={7}>
                    <img alt='call' src={callIcon} />
                  </Col>
                  <Col className='ant-col-24 contact-details-col' sm={17} md={17}>
                    <div className='contact-detail-head'>Call Anytime</div>
                    <div className='contact-detail-value'>+1 (437)-324-4022</div>
                  </Col>
                </Row>
                <Row className='mb20'>
                  <Col className='ant-col-24' sm={7} md={7}>
                    <img alt='msg' src={msgIcon} />
                  </Col>
                  <Col className='ant-col-24 contact-details-col' sm={17} md={17}>
                    <div className='contact-detail-head'>Send Email</div>
                    <div className='contact-detail-value'>info@ftinfosyscanada.com</div>
                  </Col>
                </Row>
                <Row className='mb20'>
                  <Col className='ant-col-24' sm={7} md={7}>
                    <img alt='loc' src={locationIcon} />
                  </Col>
                  <Col className='ant-col-24 contact-details-col' sm={17} md={17}>
                    <div className='contact-detail-head'>Visit Us</div>
                    <div className='contact-detail-value'>5063 North Service Road <br/>Suite 100-414 <br/>Burlington, ON, L7L 5H6 <br/>Canada</div>
                  </Col>
                </Row>
                <Row>
                  <Col className='ant-col-24' md={24}>
                    <div className='follow-us-head'>Follow Us</div>
                    <div className='follow-us-icons'>
                      <Row gutter={[0, 10]}>
                        <Col className='ant-col-24' xs={9} sm={9} md={9}></Col>
                        <Col className='ant-col-24' xs={6} sm={6} md={6}>
                          <a href={SOCIAL_MEDIA_HANDLES.LINKEDIN} target='_blank' rel='noreferrer'>
                            <img alt='lnkdin' src={linkedInIcon} />
                          </a>
                        </Col>
                        {/* <Col className='ant-col-24' sm={6} md={6}>
                          <img alt='insta' src={instaIcon} />
                        </Col>
                        <Col className='ant-col-24' sm={6} md={6}>
                          <img alt='fcb' src={facebookIcon} />
                        </Col>
                        <Col className='ant-col-24' sm={6} md={6}>
                          <img alt='twtr' src={twitterIcon} />
                        </Col> */}
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SharedContactUs;
