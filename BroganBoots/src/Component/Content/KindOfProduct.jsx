import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import productCategory from '../../helper/ProductCategory';
import SummaryApi from '../../common/SummaryApi';
import Cards from './Cards';
import ProductCard from './ProductCards';

const KindOfProduct = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll('category');

  const urlCategoryListObject = {};
  urlCategoryListinArray.forEach((el) => {
    urlCategoryListObject[el] = true;
  });

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
  const [filterCategoryList, setFilterCategoryList] = useState([]);

  const [sortBy, setSortBy] = useState('');

  const fetchData = async () => {
    const response = await fetch(SummaryApi.filterProduct.url, {
      method: SummaryApi.filterProduct.method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        category: filterCategoryList,
      }),
    });

    const dataResponse = await response.json();
    setData(dataResponse?.data || []);
  };

  const handleSelectCategory = (e) => {
    const { name, value, checked } = e.target;

    setSelectCategory((prev) => {
      return {
        ...prev,
        [value]: checked,
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, [filterCategoryList]);

  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .map((categoryKeyName) => {
        if (selectCategory[categoryKeyName]) {
          return categoryKeyName;
        }
        return null;
      })
      .filter((el) => el);

    setFilterCategoryList(arrayOfCategory);

    //format for url change when change on the checkbox
    const urlFormat = arrayOfCategory.map((el, index) => {
      if (arrayOfCategory.length - 1 === index) {
        return `category=${el}`;
      }
      return `category=${el}&&`;
    });

    navigate('/product-category?' + urlFormat.join(''));
  }, [selectCategory]);

  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;

    setSortBy(value);

    if (value === 'asc') {
      setData((prev) => prev.sort((a, b) => a.sellingPrice - b.sellingPrice));
    }

    if (value === 'dsc') {
      setData((prev) => prev.sort((a, b) => b.sellingPrice - a.sellingPrice));
    }
  };

  useEffect(() => {}, [sortBy]);

  return (
    <div className=" ">
      {/* Desktop version */}
      <div className="flex flex-col md:flex-row pt-3">
        {/* Left side */}
        <div className="bg-gray-800 text-white md:w-1/5 p-5 rounded-ee-lg rounded-se-lg  shadow-md">
          {/* Sort by */}
          <div className="mb-5">
            <h3 className="text-xl font-bold mb-3">Sort by</h3>
            <form>
              <div className="flex items-center gap-3 mb-2">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === 'asc'}
                  onChange={handleOnChangeSortBy}
                  value={'asc'}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label className="text-sm">Price - Low to High</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="sortBy"
                  checked={sortBy === 'dsc'}
                  onChange={handleOnChangeSortBy}
                  value={'dsc'}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label className="text-sm">Price - High to Low</label>
              </div>
            </form>
          </div>

          {/* Filter by */}
          <div>
            <h3 className="text-xl font-bold mb-3">Category</h3>
            <form>
              {productCategory.map((categoryName, index) => {
                return (
                  <div className="flex items-center gap-3 mb-2" key={index}>
                    <input
                      type="checkbox"
                      name={'category'}
                      checked={selectCategory[categoryName?.value]}
                      value={categoryName?.value}
                      id={categoryName?.value}
                      onChange={handleSelectCategory}
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor={categoryName?.value} className="text-sm">
                      {categoryName?.label}
                    </label>
                  </div>
                );
              })}
            </form>
          </div> 
          
        </div>

        {/* Right side (product display) */}
        <div className="md:w-3/4 p-3">
          <div className="text-2xl font-bold mb-4">
            Search Results : {data.length}
          </div>

          <div className="">
            {data.length !== 0 && !loading && (
              <ProductCard data={data} loading={loading} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KindOfProduct;
