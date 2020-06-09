import * as Yup from "yup";

/**
 * @description
 * @param t language
 */
const LoginSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Kindly enter correct email address")
      .required("Please enter email address"),
    password: Yup.string()
      .min(8, "Must be greater then 8 characters")
      .required("Please enter password")
      .matches(/^\S*$/, "Blank Space not allowed in password"),
    // rememberMe: Yup.bool().oneOf([true], "Remember me required"),
    recaptcha: Yup.string().required("Captcha is required"),
  });

  const uploadDocSchema = () =>
  Yup.object().shape({
    docNumber: Yup.string()
      .trim()
      .required("Please enter Document Number"),
      firstDoc: Yup.mixed().required('Please upload file'),
      secondDoc: Yup.string()
      .trim()
      .required("Please upload file"),
      thirdDoc: Yup.string()
      .trim()
      .required("Please upload file"),
      isTandC: Yup.string()
      .trim()
      .required("Please upload file"),
    
  });
  
  const moneyExchangeSchema = () =>
    Yup.object().shape({
      send: Yup.string()
        .trim()
        .required("Enter your amount"),
          receive: Yup.string()
            .trim()
            .required("Enter your amount"),
  })
  const BTCAddress = () =>
    Yup.object().shape({
      BTCAddress: Yup.string()
        .trim()
        .required("Enter your BTC Address"),
        BTCName: Yup.string()
        .trim()
        .required("Enter your BTC Name"),
  })
  const BTCAddressAnother  = () =>
  Yup.object().shape({
    BTCAddress: Yup.string()
      .trim()
      .required("Enter your BTC Address"),
})

  const SEPAFormSchema = () =>
    Yup.object().shape({
      beneficiary: Yup.string()
        .trim()
        .required("Enter your beneficiary"),
        address: Yup.string()
        .trim()
        .required("Enter your address"),
        city: Yup.string()
        .trim()
        .required("Enter your city"),
        country: Yup.string()
        .trim()
        .required("Enter your country"),
        iban: Yup.string()
        .trim()
        .required("Enter your IBAN"),
        reference: Yup.string()
        .trim()
        .required("Enter your reference"),
        receivingBank: Yup.string()
        .trim()
        .required("Enter your receivingBank"),
        address1: Yup.string()
        .trim()
        .required("Enter your address"),
        city1: Yup.string()
        .trim()
        .required("Enter your BTC city"),
        country1: Yup.string()
        .trim()
        .required("Enter your country"),
  })

  const Schema = {
    LoginSchema,
    uploadDocSchema,
    moneyExchangeSchema,
    BTCAddress,
    SEPAFormSchema,
    BTCAddressAnother
  }

export default Schema;