export const customerFormValidationOptions = {
  firstName: {
    path: 'form.firstName',
    methods: ['minLength', 'required'],
    hints: {
      minLength: 'Введите не менее 3 символов',
      required: 'Введите имя',
    },
  },
  lastName: {
    path: 'form.lastName',
    methods: ['minLength', 'required'],
    hints: {
      minLength: 'Введите не менее 3 символов',
      required: 'Введите фамилию',
    },
  },
  middleName: {
    path: 'form.middleName',
    methods: ['minLength'],
    hints: {
      minLength: 'Введите не менее 3 символов',
    },
  },
  birthDate: {
    path: 'form.birthDate',
    methods: ['required'],
    hints: {
      required: 'Введите дату рождения',
    },
  },
  mobileNumber: {
    path: 'form.mobileNumber',
    methods: ['minLength', 'firstLetter', 'numeric', 'required'],
    hints: {
      required: 'Введите номер телефона',
      minLength: 'Введите 11 цифр',
      firstLetter: 'Должен начинаться с цифры "7"',
      numeric: 'Допустимы только цифры',
    },
  },
  customerGroup: {
    path: 'form.customerGroup',
    methods: ['required'],
    hints: {
      required: 'Выберите группу клиентов',
    },
  },
  postcode: {
    path: 'form.postcode',
    methods: ['numeric'],
    hints: {
      numeric: 'Допустимы только цифры',
    },
  },
  country: {
    path: 'form.country',
    methods: ['minLength'],
    hints: {
      minLength: 'Введите не менее 3 символов',
    },
  },
  city: {
    path: 'form.city',
    methods: ['required'],
    hints: {
      required: 'Введите город',
    },
  },
  documentType: {
    path: 'form.documentType',
    methods: ['required'],
    hints: {
      required: 'Выберите тип документа',
    },
  },
  passportNumber: {
    path: 'form.passportNumber',
    methods: ['numeric'],
    hints: {
      numeric: 'Допустимы только цифры',
    },
  },
  issuedDate: {
    path: 'form.issuedDate',
    methods: ['required'],
    hints: {
      required: 'Введите дату выдачи',
    },
  },
}