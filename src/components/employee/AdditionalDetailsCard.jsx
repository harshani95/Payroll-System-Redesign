import DynamicButton from "../DynamicButton";

const InputField = ({ label, id, type, ...rest }) => (
  <div className="flex items-center gap-3 w-full text-sm">
    <label
      htmlFor={id}
      className="min-w-[100px] font-medium text-gray-700 text-sm dark:text-white"
    >
      {label}
    </label>

    <input
      type={type}
      id={id}
      {...rest}
      className="
        flex-1 border border-gray-300 rounded-md p-1.5
        focus:ring-1 focus:ring-blue-500 focus:outline-none
        text-gray-700 dark:text-white
        bg-white dark:bg-zinc-700
        disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
      "
    />
  </div>
);

const SelectField = ({ label, id, options }) => (
  <div className="flex items-center gap-3 w-full text-sm">
    <label
      htmlFor={id}
      className="min-w-[100px] font-medium text-gray-700 text-sm dark:text-white"
    >
      {label}
    </label>

    <select
      id={id}
      className="
        flex-1 border border-gray-300 rounded-md p-1.5
        focus:ring-1 focus:ring-blue-500 focus:outline-none
        text-gray-700 dark:text-white
        bg-white dark:bg-zinc-700
      "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const CheckboxField = ({ label, id, checked = false }) => (
  <div className="flex items-center gap-6 text-sm">
    <label
      htmlFor={id}
      className="w-80 text-gray-700 font-medium dark:text-white"
    >
      {label}
    </label>
    <input type="checkbox" id={id} checked={checked} />
  </div>
);

const AdditionalDetailsCard = () => {
  const numberInputProps = {
    type: "number",
    defaultValue: "0.00",
  };

  return (
    <div className="w-full mx-auto mt-6 bg-white rounded-lg shadow-lg p-4 dark:bg-zinc-800">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 dark:text-white">
        Additional Details
      </h2>
      <form className="w-full space-y-4 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputField label="EPF No" id="epf-no" type="text" />

          <SelectField
            label="Salary Types"
            id="salaryType"
            options={[
              { value: "salary-type", label: "Select Salary Type" },
              { value: "other", label: "Other" },
            ]}
          />

          <SelectField
            label="Catagery"
            id="catagery"
            options={[
              { value: "catagery-type", label: "Select Employee Catagery" },
              { value: "other", label: "Other" },
            ]}
          />

          <SelectField
            label="Department"
            id="department"
            options={[
              { value: "department", label: "Select Employee Department" },
              { value: "other", label: "Other" },
            ]}
          />

          <InputField label="Join Date" id="join-date" type="date" />
          <InputField label="Resign Date" id="join-date" type="date" />
          <InputField label="Leaves" id="leaves" type="text" />
          <InputField label="Remarks" id="remarks" type="text" />

          <SelectField
            label="Bank"
            id="bank"
            options={[
              { value: "bank", label: "Select Bank" },
              { value: "other", label: "Other" },
            ]}
          />
          <InputField label="Bank Code" id="bank-code" type="text" disabled />

          <SelectField
            label="Branch"
            id="branch"
            options={[
              { value: "branch", label: "Select Branch" },
              { value: "other", label: "Other" },
            ]}
          />
          <InputField
            label="Branch Code"
            id="branch-code"
            type="text"
            disabled
          />

          <InputField label="Account No" id="accountNo" />
          <InputField
            label="Basic Salary"
            id="basic-salary"
            {...numberInputProps}
            type="number"
          />
          <InputField
            label="Incentive"
            id="incentive"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Bdget Allowence"
            id="budget-allowence"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Special Incentive"
            id="special-incentive"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Service Incentive"
            id="service-incentive"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Granding Incentive"
            id="granding-incentive"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Adjustment"
            id="adjustment"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Transport Fee"
            id="transport-fee"
            type="number"
            {...numberInputProps}
          />
          <InputField
            label="Attendence Bonus"
            id="attendence-bonus"
            type="number"
            {...numberInputProps}
          />
        </div>

        <DynamicButton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <CheckboxField label="OT Allowed" id="ot-allowed" />
          <CheckboxField label="Late Allowed" id="late-allowed" />
          <CheckboxField label="Deactive" id="deactive" />
          <CheckboxField label="ETF/EPF Allowed" id="etf-epf-allowed" />
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetailsCard;
