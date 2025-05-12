const dataFields = [
    {
        name: 'name',
        placeholder: 'Name',
        type: 'text',
        validation: {
            required: 'Name is required',
        },
    },
    {
        name: 'phone',
        placeholder: 'Phone number',
        type: 'tel',
        validation: {
            required: 'Phone number is required',
            pattern: {
                value: /^\+\d{4,}$/,
                message: 'Phone number must start with "+" and contain at least 4 digits',
            },
        },
    },
    {
        name: 'email',
        placeholder: 'Email',
        type: 'text',
        validation: {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email format',
            }
        },
    },
]
export default dataFields