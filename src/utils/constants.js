export default function constants() {
  const API_GW = 'http://localhost:5000/api/v1';
  // const API_GW = 'https://ftinfosyscanada-backend.ftinfosyscanada.com/api/v1';
  return {
    API_END_POINTS: {
      CONTACT_US: `${API_GW}/user/contact-us`
    },
    SUCCESS_MESSAGE_TIMER: 3,
    ERROR_MESSAGE_TIMER: 5,
    SOCIAL_MEDIA_HANDLES: {
      LINKEDIN: 'https://www.linkedin.com/company/ftinfosyscanada/'
    }
  };
}
