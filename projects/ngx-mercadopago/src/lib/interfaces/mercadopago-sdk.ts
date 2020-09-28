export interface MercadopagoSDk {
    version: string;
    // AJAX: ƒ n(t)
    AJAX: void;
    clearSession: () => void;
    // createDeviceProfile: ƒ n(n)
    createDeviceProfile: void;
    createToken: (
        form: PaymentForm,
        callback: ((status: number, data: CardToken | ErrorData) => void)
    ) => void;
    deviceProfileId: string;
    // getAllPaymentMethods: ƒ (t)
    getAllPaymentMethods: void;
    getIdentificationTypes: (
        callback: ((status: number, data: IdentificationType[]) => void)
    ) => void;
    getInstallments: (
        card: CardInstallment,
        callback: ((status: number, data: Installments[] | ErrorData) => void)
    ) => void;
    // getIssuers: ƒ (t, n)
    getIssuers: void;
    getPaymentMethod: (
        card: PaymentMethodSearch,
        callback: ((status: number, data: PaymentMethod[] | ErrorData) => void)
    ) => void;
    getPaymentMethods: () => PaymentMethod[];
    initMercadopago: () => void;
    initialized: boolean;
    initializedInsights: boolean;
    key: null;
    referer: string;
    sessionId: null;
    // setPaymentMethods: ƒ (e)
    setPaymentMethods: () => void;
    // setPublishableKey: ƒ (t)
    setPublishableKey: (key: string) => void;
    tokenId: null;
    // validateBinPattern: ƒ (e, t)
    validateBinPattern: () => void;
    // validateCardNumber: ƒ a(e, t, n)
    validateCardNumber: () => void;
    // validateCardholderName: ƒ d(e)
    validateCardholderName: () => void;
    // validateExpiryDate: ƒ l(e, t)
    validateExpiryDate: () => void;
    // validateIdentification: ƒ s(e, t)
    validateIdentification: () => void;
    // validateLuhn: ƒ o(e)
    validateLuhn: () => void;
    // validateSecurityCode: ƒ c(e, t, n)
    validateSecurityCode: () => void;
}

export interface PaymentMethod {
    id: string;
    name: string;
    payment_type_id: 'credit_card' | 'debit_card' | 'ticket';
    status: string;
    secure_thumbnail: string;
    thumbnail: string;
    deferred_capture: string;
    settings: Setting[];
    additional_info_needed: string[];
    min_allowed_amount: number;
    max_allowed_amount: number;
    accreditation_time: number;
    financial_institutions: any[];
    processing_modes: string[];
}

export interface PaymentMethodSearch {
    payment_method_id?: string;
    bin?: number | string;
}

export interface Setting {
    card_number: CardNumber;
    bin: Bin;
    security_code: SecurityCode;
}

export interface SecurityCode {
    length: number;
    card_location: string;
    mode: string;
}

export interface Bin {
    pattern: string;
    installments_pattern: string;
    exclusion_pattern?: string;
}

export interface CardNumber {
    validation: string;
    length: number;
}

export interface IdentificationType {
    id: string;
    name: string;
    type: string;
    min_length: number;
    max_length: number;
}

export interface PaymentForm {
    cardNumber: any;
    securityCode: any;
    cardExpirationMonth: any;
    cardExpirationYear: string;
    cardholderName: any;
    docType: string;
    docNumber: any;
}

export interface CardToken {
    card_number_length: number;
    cardholder: Cardholder;
    date_created: string;
    date_due: string;
    date_last_updated: string;
    expiration_month: number;
    expiration_year: number;
    first_six_digits: string;
    id: string;
    last_four_digits: string;
    live_mode: boolean;
    luhn_validation: boolean;
    public_key: string;
    require_esc: boolean;
    security_code_length: number;
    status: string;
}

export interface Cardholder {
    identification: Identification;
    name: string;
}

export interface Identification {
    number: string;
    type: string;
}

export interface CardInstallment {
    payment_type_id?: 'credit_card' | 'debit_card' | 'ticket';
    payment_method_id?: string;
    bin?: number | string;
}
export interface Installments {
    payment_method_id: string;
    payment_type_id: string;
    issuer: Issuer;
    processing_mode: string;
    merchant_account_id?: any;
    payer_costs: PayerCost[];
    agreements?: any;
}

export interface PayerCost {
    installments: number;
    installment_rate: number;
    discount_rate: number;
    reimbursement_rate?: number;
    labels: string[];
    installment_rate_collector: string[];
    min_allowed_amount: number;
    max_allowed_amount: number;
    recommended_message: string;
    installment_amount?: number;
    total_amount?: number;
    payment_method_option_id: string;
}

export interface Issuer {
    id: string;
    name: string;
    secure_thumbnail: string;
    thumbnail: string;
}

export interface ErrorData {
    cause: any[];
    error: string;
    message: string;
    status: number;
}