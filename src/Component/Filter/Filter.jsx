import { MdFilterList } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useActions, useChange } from '../../store/useStore';
import useHotelsContent from "../../Hooks/useHotelsContent";
import { useLocation } from "react-router-dom";
import './Filter.css';
import { useEffect } from "react";

const Filter = () => {
  const { showFilter, setShowFilter } = useActions();
  const loacation=useLocation();
  useEffect(()=>{
    setShowFilter(false)
  },[loacation])
  const { 
    filter, 
    setSearch, 
    toggelStars, 
    toggelTypes, 
    toggelLocation, 
    setPrice, 
    resetFilter 
  } = useChange();

  const { uniqueCountries, uniqueTypes } = useHotelsContent();

  const filterOptions = {
    rate: [1, 2, 3, 4, 5],
    location: uniqueCountries.map((item) => item.country),
    type: uniqueTypes.map((item) => item.type),
    price: ['Price Low to Height', 'Price Height to Low', 'Newest'],
  };

  const Checkbox = ({ label, checked, onChange }) => (
    <div className='filter-data'>
      <input 
        type='checkbox' 
        checked={checked} 
        onChange={onChange} 
      />
      <label>{label}</label>
    </div>
  );

  const StarCheckbox = ({ rating, checked, onChange }) => (
    <div className='filter-data'>
      <input 
        type='checkbox' 
        checked={checked} 
        onChange={onChange} 
      />
      <label className='stars-label'>
        {Array.from({ length: rating }).map((_, index) => (
          <FaStar key={index} className='stars' />
        ))}
      </label>
    </div>
  );

  const Radio = ({ label, value, checked, name, onChange }) => (
    <div className='filter-data'>
      <input 
        type='radio' 
        name={name} 
        value={value} 
        checked={checked} 
        onChange={onChange} 
      />
      <label>{label}</label>
    </div>
  );

  return (
    <>
      {/* Desktop Filter */}
      <div className="filter">
        <h3>Search Hotels</h3>
        <input 
          className='search' 
          type="search" 
          placeholder='Search' 
          value={filter.search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <h3>Star rating</h3>
        {filterOptions.rate.map((num, index) => (
          <StarCheckbox 
            key={index} 
            rating={num}
            checked={filter.stars.includes(num)}
            onChange={() => toggelStars(num)}
          />
        ))}
        
        <h3>Location</h3>
        {filterOptions.location.map((city, index) => (
          <Checkbox 
            key={index} 
            label={city} 
            checked={filter.location.includes(city)}
            onChange={() => toggelLocation(city)}
          />
        ))}
        
        <h3>Types Hotels</h3>
        {filterOptions.type.map((type, index) => (
          <Checkbox 
            key={index} 
            label={type} 
            checked={filter.types.includes(type)}
            onChange={() => toggelTypes(type)}
          />
        ))}
        
        <h3>Price</h3>
        {filterOptions.price.map((item, index) => (
          <Radio 
            key={index} 
            label={item} 
            value={item}
            checked={filter.price === item}             
            onChange={(e) => setPrice(e.target.value)}
            name="priceFilter"
          />
        ))}

        <button onClick={() => resetFilter()} className="reset-filter">
          Reset Filters
        </button>
      </div>

      <div className='filterIcons' onClick={()=>setShowFilter(true)}> 
        Filter <MdFilterList/>
      </div>
      
      {/* Mobile Filter Drawer */}
      {showFilter && (
        <div className='filterMobiel'>
          <div className='filtering'>
            <div>
              <h3>Search Hotels</h3>
              <input 
                className='search' 
                type="search" 
                placeholder='Search'
                value={filter.search}
                onChange={(e) => setSearch(e.target.value)}
              />
              
              <h3>Star rating</h3>
              {filterOptions.rate.map((num, index) => (
                <StarCheckbox
                  key={`mobile-${index}`} 
                  rating={num}
                  checked={filter.stars.includes(num)}
                  onChange={() => toggelStars(num)}
                />
              ))}
              
              <h3>Location</h3>
              {filterOptions.location.map((city, index) => (
                <Checkbox 
                  key={`mobile-loc-${index}`} 
                  label={city} 
                  checked={filter.location.includes(city)}
                  onChange={() => toggelLocation(city)}
                />
              ))}
            </div>
            
            <div>
              <h3>Types Hotels</h3>
              {filterOptions.type.map((type, index) => (
                <Checkbox 
                  key={`mobile-type-${index}`} 
                  label={type} 
                  checked={filter.types.includes(type)}
                  onChange={() => toggelTypes(type)}
                />
              ))}
              
              <h3>Price</h3>
              {filterOptions.price.map((item, index) => (
                <Radio 
                  key={`mobile-price-${index}`} 
                  label={item} 
                  value={item}
                  checked={filter.price === item}
                  onChange={(e) => setPrice(e.target.value)}
                  name="mobilePriceFilter"
                />
              ))}
            </div>
          </div>
          
          <div className="mobile-filter-buttons">
            <button className="reset-filter" onClick={() => resetFilter()}>Reset</button>
            <button onClick={()=>setShowFilter(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;