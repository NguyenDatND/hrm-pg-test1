export interface Employee {
    id: number;
    old_staff_id: number | null;
    staff_id: string;
    name: string;
    gender: number | string;
    department_id: number;
    company_id: number;
    manager_id: number | null;
    marriage_id: number | string;
    position_id: number | null;
    type: string;
    mother_name: string;
    dob: string;
    pob: string | null;
    ktp_no: string;
    nc_id: string;
    home_address_1: string;
    home_address_2: string | null;
    mobile_no: string | null;
    tel_no: string;
    bank_account_no: string;
    bank_name: string;
    card_number: string | null;
    family_card_number: string;
    health_insurance_no: string;
    safety_insurance_no: string;
    basic_salary: number;
    audit_salary: number;
    health_insurance: number;
    safety_insurance: number;
    meal_allowance: number;
    entitle_ot: number;
    meal_allowance_paid: number;
    operational_allowance_paid: number;
    attendance_allowance_paid: number;
    minimum_salary_used: string;
    contract_start_date: string;
    shift: string;
    grade_id: number;
    remark: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    department_name: string;
    marriage_code: string;
    position_name: string | null;
    grade_prefix: string;
    grade_name: string;
    manager_name: string | null;
    contracts: Contract[];
    [key: string]: any;
}

export interface EmployeeList {
    current_page: number;
    data: Employee[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string;
        label: string;
        active: boolean;
    };
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Contract {
    id: number;
    employee_id: number;
    contract_date: string;
    name: string;
    document: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

// form employee Information
export interface FormEmployeeInformation {
    nik: string;
    name: string;
    gender: string;
    mother_name: string;
    dob: string;
    pob: string;
    ktp_no: string;
    nc_id: string;
    home_address_1: string;
    home_address_2: string;
    mobile_no: string;
    tel_no: string;
    marriage_id: string;
    card_number: string;
    bank_account_no: string;
    bank_name: string;
    family_card_number: string;
    safety_insurance_no: string;
    health_insurance_no: string;
}

// from contract information
export interface FormContractEmployee {
    contract_start_date: string;
    type: string;
    contract: Contract[];
}
// from employee Salary information
export interface FormSalaryEmployee {
    basic_salary: number;
    audit_salary: number;
    safety_insurance: number;
    health_insurance: number;
    meal_allowance: number;
}
// form employee details
export interface FormDetailsEmployee {
    department_id: string;
    position_id: string;
}

export interface MarriageStatus {
    id: number;
    name: string;
    code: string;
    company_id: number;
    created_at: string;
    updated_at: string | null;
}

export interface Department {
    id: number;
    company_id: number;
    code: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Position {
    id: number;
    company_id: number;
    code: string;
    name: string;
    created_at: string;
    updated_at: string;
}
