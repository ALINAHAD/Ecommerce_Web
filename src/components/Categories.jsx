import React from 'react'
import { usePaginationContext} from './contexts/PaginationContext';


function Categories(props) {
    const {whatsTheCategory, setCurrCategory}=props;
    const {setPageNum}=usePaginationContext();
    console.log(whatsTheCategory); //what all types of categories
  return (
    <>
    <div className="catagories_wrapper">
    <div className="category-full-container">
    <div className='category_heading'>Categories</div>
   <button className='category_option'onClick={()=>{setCurrCategory("All Categories")
    setPageNum(1)
   }}>All</button>
        {whatsTheCategory.map((category)=>{
            return <button className='category_option' onClick={()=>{
                setCurrCategory(category); //update current category
                setPageNum(1) //when user choose a category the products of that category should display from page no.1
               
            }}>{category}</button> //diplaying the category name in button
        })}

    </div>
</div>
    <div className='responsive-category'>
      
    <select className='category_select' onChange={(e)=>{
        setCurrCategory(e.target.value);
        setPageNum(1)
    }}>
        <option value="All Categories">All</option>
        {whatsTheCategory.map((category)=>{
            return <option value={category}>{category}</option>
        })}
    </select>
    </div>
    </>
  )
}

export default Categories