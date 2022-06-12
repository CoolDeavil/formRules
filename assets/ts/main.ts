import FRules from "./Classes/FRules";

export default function main(){
    let fr = new FRules({
        form: 'lucille',
        fields: [
            {
                name: 'userName',
                validation: ['required','range(8,24)'],
                errorMessages: [],
                asyncValidation: [
                    ['http://localhost:5000/','name'],
                ]
            },
            {
                name: 'email',
                validation: ['required','validEmail'],
                errorMessages: [],
                asyncValidation: [[`http://localhost:5000/`,'email']]
            },
            {
                name: 'password',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'confirmPassword',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'age',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'mobile',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'lang',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'upload',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'dateStart',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'dateEnd',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'radios',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'multiple',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
            {
                name: 'terms',
                validation: ['required'],
                errorMessages: [],
                asyncValidation: []
            },
        ],
        defaults: {
            // render: true,
            // cssBase: 'errorLabel',
            // cssAlert: 'cAlert',
            // cssError: 'cError',
            // cssAsync: 'async',
        }
    })
}


if (document.readyState === 'complete') {
    main()
} else {
    document.addEventListener('DOMContentLoaded', main);
}

