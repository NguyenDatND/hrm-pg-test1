import { APIHost } from '../utils/contants';

enum APIService {
    auth,
    protected,
    public,
}

function getBaseUrl(service: APIService) {
    if (service === APIService.auth) {
        return `${APIHost}`;
    } else if (service === APIService.protected) {
        return `${APIHost}/protected`;
    } else if (service === APIService.public) {
        return `${APIHost}`;
    }

    return '';
}

export const API_PATHS = {
    signIn: 'api/login',
    company: 'api/company',
    employee: 'api/employee',
    marriage: 'api/marriage',
    user: 'api/user',
    useDetail: 'api/user/detail',
    logout: 'api/logout',
    forgotPassword: 'api/forgot-password',

    API_FIXER: 'https://api-training.hrm.div4.pgtest.co/api/v1',

    // signUp: `${getBaseUrl(APIService.auth)}/register`,
    // location: `${getBaseUrl(APIService.public)}/location`,
    // locationByID: `${getBaseUrl(APIService.public)}/location?pid=`,
    // userProfile: `${getBaseUrl(APIService.public)}/user`,
    // product: `${getBaseUrl(APIService.public)}/product`,
};
