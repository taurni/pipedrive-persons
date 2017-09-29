import axios from 'axios';
import { TOKEN, CUSTOMFIELDS } from '../../constants';

const fields = `first_name,last_name,name,phone,email,org_name,picture_id,${CUSTOMFIELDS.ASSISTANT},${CUSTOMFIELDS.LOCATION},${CUSTOMFIELDS.GROUPS}`;

let getQuery = (endPoint) => {
    return `https://api.pipedrive.com/v1/${endPoint}:(${fields})?api_token=${TOKEN}`
};

const getPersons = () => new Promise((resolve, reject) => {
    const result = axios.get(getQuery('persons'));
    result
        .then(({data}) => resolve(data.data))
        .catch((err) => reject(err));
});

const findPersons = (searchText) => new Promise((resolve, reject) => {
   const result = axios.get(getQuery('persons/find')+`&term=${searchText}`);
   result
        .then(({data}) => resolve(data.data))
        .catch((err) => reject(err));
});

export { getPersons, findPersons }