import { combineForms } from 'react-redux-form';

export default combineForms(
    {
        login: {
            username:    '',
            password: '',
        },
        signup: {
            firstname: '',
            lastname: '',
            password: '',
            username: '',

        }
    },
    'forms',
);
