const DOMAIN_PIXEL = '/pixel';
const DOMAIN_CATALOG = '/catalog';

export const PIXEL = {
    GET_ALL: `${DOMAIN_PIXEL}/get-all`,
    GET: `${DOMAIN_PIXEL}`,
    CREATE: `${DOMAIN_PIXEL}/create`,
    DELETE: `${DOMAIN_PIXEL}/delete`,
    UPDATE: `${DOMAIN_PIXEL}/update`
}

export const CATALOG = {
    GET_ALL: `${DOMAIN_CATALOG}/get-all`,
    GET: `${DOMAIN_CATALOG}`,
    CREATE: `${DOMAIN_CATALOG}/create`,
    DELETE: `${DOMAIN_CATALOG}/delete`,
    UPDATE: `${DOMAIN_CATALOG}/update`
}