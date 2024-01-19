import { useState, useRef, useEffect } from "react";

export const CustomDropdown = ({ label, options, selectedValue, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    onValueChange(value);
    setIsOpen(false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const closeOtherDropdowns = (event) => {
      if (isOpen && event.target.getAttribute('data-dropdown-toggle') !== label) {
        closeDropdown();
      }
    };

    document.addEventListener('click', closeOtherDropdowns);

    return () => {
      document.removeEventListener('click', closeOtherDropdowns);
    };
  }, [isOpen, label]);

  return (
    <div className="relative inline-block text-left w-full md:w-auto" ref={dropdownRef}>
      <div className='w-full md:w-auto'>
        <button
          data-dropdown-toggle={label}
          onClick={toggleDropdown}
          type="button"
          className="flex items-center justify-between w-full md:w-[20vw] 2xl:w-72 text-sm md:text-base py-[6px] md:py-2 px-2 md:px-3 font-light bg-white text-[#0098CE] rounded-[9px] md:rounded-xl md:me-0 focus:ring-2 focus:ring-blue-700"
        >
          <span className="sr-only">Open {label} menu</span>
          {label === 'Technical Event Category' ? (
            <>
              <span className="me-2">Technical</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M12.3729 0H0.62706C0.0712317 0 -0.211926 0.671194 0.186592 1.06972L6.0595 6.94267C6.30071 7.18388 6.69922 7.18388 6.94054 6.94267L12.8134 1.06972C13.2119 0.671194 12.9287 0 12.3729 0Z" fill="url(#paint0_linear_784_456)"/><defs><linearGradient id="paint0_linear_784_456" x1="6.49998" y1="0" x2="6.49998" y2="7.12358" gradientUnits="userSpaceOnUse"><stop stop-color="#1741CC"/><stop offset="1" stop-color="#16BCDC"/></linearGradient></defs></svg>
            </>
          ) : (
            <>
              <span className="me-2">Cultural</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M12.3729 0H0.62706C0.0712317 0 -0.211926 0.671194 0.186592 1.06972L6.0595 6.94267C6.30071 7.18388 6.69922 7.18388 6.94054 6.94267L12.8134 1.06972C13.2119 0.671194 12.9287 0 12.3729 0Z" fill="url(#paint0_linear_784_456)"/><defs><linearGradient id="paint0_linear_784_456" x1="6.49998" y1="0" x2="6.49998" y2="7.12358" gradientUnits="userSpaceOnUse"><stop stop-color="#1741CC"/><stop offset="1" stop-color="#16BCDC"/></linearGradient></defs></svg>
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          id={`dropdown${label.replace(/\s+/g, '')}`}
          className="origin-top-right absolute z-50 right-0 mt-1 w-full md:w-[20vw] 2xl:w-72 rounded-md shadow-lg bg-white divide-y divide-gray-100 "
        >
          <ul className="py-2 text-sm text-[#0098CE]">
            {options.map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleOptionClick(option)}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
