import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext";

const InputField = ({ label, id, placeholder }) => (
  <div className="flex items-center gap-3 w-full text-sm">
    <label
      htmlFor={id}
      className="min-w-[100px] font-medium text-gray-700 text-sm dark:text-white"
    >
      {label}
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="flex-1 border border-gray-300 rounded-md p-1.5 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
      className="flex-1 border border-gray-300 rounded-md p-1.5 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const DetailsCard = () => {
   const { darkMode } = useContext(ThemeContext);
  return (
    <div className="w-full mx-auto mt-6 bg-white rounded-lg shadow-lg p-4 dark:bg-zinc-800">
      <form className="w-full space-y-4 text-sm ">
        <InputField label="Employee No" id="empNo" placeholder="Primary" />
        <InputField label="Display Name" id="displayName" placeholder="John Doe" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectField
            label="Category"
            id="category"
            options={[
              { value: "search", label: "Search Term" },
              { value: "other", label: "Other" },
            ]}
          />

          <div className="flex items-center gap-3 w-full text-sm">
            <label className="min-w-[100px] font-medium text-gray-700 text-sm dark:text-white">
              Salary Status
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="salaryStatus"
                  value="monthly"
                  className="text-blue-600"
                />
                <span>Monthly Salary</span>
              </label>
              <label className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="salaryStatus"
                  value="daily"
                  className="text-blue-600"
                />
                <span>Daily Salary</span>
              </label>
            </div>
          </div>

          <InputField label="First Name" id="firstName" placeholder="John" />
          <InputField label="Middle Name" id="middleName" placeholder="M" />
          <InputField label="Last Name" id="lastName" placeholder="Doe" />
          <InputField label="NIC" id="nic" placeholder="123456789V" />
          <InputField label="Email" id="email" placeholder="john@example.com" />
          <InputField label="Qualification" id="qualification" placeholder="BSc IT" />

          <SelectField
            label="Gender"
            id="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
          />

          <SelectField
            label="Civil Status"
            id="civilStatus"
            options={[
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
            ]}
          />
        </div>

        <div className="flex items-center gap-3 w-full text-sm">
          <label
            htmlFor="contact"
            className="min-w-[100px] font-medium text-gray-700 text-sm dark:text-white"
          >
            Contact No
          </label>
          <div className="flex-1 flex gap-3">
            <input
              type="text"
              id="contact1"
              placeholder="Primary"
              className="flex-1 border border-gray-300 rounded-md p-1.5 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              id="contact2"
              placeholder="Secondary"
              className="flex-1 border border-gray-300 rounded-md p-1.5 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <InputField label="Address" id="address" placeholder="123 Main St" />
      </form>
    </div>
  );
};

export default DetailsCard;
