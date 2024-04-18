export const FormInput = ({
  labelText,
  value,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2 font-DMSans">
      <label className="text-[16px] text-black">{labelText}</label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-fit rounded-[10px] font-DMSans text-[16px] py-3 px-4 border-[1px] border-[#757575]"
      ></input>
    </div>
  );
};
