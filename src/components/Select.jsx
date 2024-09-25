import React, { useId } from "react";
import { forwardRef } from "react";
function Select({ label, options, className = "", ...props }, ref) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label className="" htmlFor={id}>
                    {label}
                </label>
            )}
            <select
                id={id}
                {...props}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {" "}
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default forwardRef(Select);
