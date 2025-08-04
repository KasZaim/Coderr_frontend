const GUEST_LOGINS = {
    customer : {
        username: 'andrey',
        password: 'asdasd'
    },
    business : {
        username: 'kevin',
        password: 'asdasd24'
    }
}

// Automatische Umgebungserkennung für Development/Production
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const API_BASE_URL = isDevelopment 
    ? 'http://127.0.0.1:8000/api/'
    : 'https://coderr-backend-production-f3d4.up.railway.app/api/';

const STATIC_BASE_URL = isDevelopment
    ? 'http://127.0.0.1:8000/'
    : 'https://coderr-backend-production-f3d4.up.railway.app/';


const LOGIN_URL = 'login/';

const REGISTER_URL = 'registration/';

const PROFILE_URL = 'profile/';

const BUSINESS_PROFILES_URL = 'profiles/business/';

const CUSTOMER_PROFILES_URL = 'profiles/customer/';

const REVIEW_URL = 'reviews/';

const ORDER_URL = 'orders/';

const OFFER_URL = 'offers/';

const OFFER_DETAIL_URL = 'offerdetails/';

const BASE_INFO_URL = 'base-info/';

const OFFER_INPROGRESS_COUNT_URL = 'order-count/';
const OFFER_COMPLETED_COUNT_URL = 'completed-order-count/';

const PAGE_SIZE = 6