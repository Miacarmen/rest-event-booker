import React from 'react';

// If location filter is selected, display another location search

const SearchFilter = () => {
  return (
    <div className='flex-none'>
      <div className='form-control'>
        <div className='input-group'>
          <select className='select select-bordered'>
            <option disabled selected>
              Filter by...
            </option>
            <option>Location</option>
            <option>Day of Week</option>
            <option>Time of Day</option>
            <option>Age 21+</option>
          </select>
          <button className='btn'>Go</button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
