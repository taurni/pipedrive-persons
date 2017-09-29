import axios from 'axios';
import { TOKEN, CUSTOMFIELDS } from '../../constants';

const fields = `first_name,last_name,name,phone,email,org_name,picture_id,${CUSTOMFIELDS.ASSISTANT},${CUSTOMFIELDS.LOCATION},${CUSTOMFIELDS.GROUPS}`;
const query = `https://api.pipedrive.com/v1/persons:(${fields})?api_token=${TOKEN}`;

const getPersons = () => new Promise((resolve, reject) => {
    const result = axios.get(query);
    result
        .then(({data}) => resolve(data.data))
        .catch((err) => reject(err));
});

export { getPersons }