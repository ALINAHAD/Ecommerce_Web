import React,{ useState, useEffect } from 'react';
import {FaArrowAltCircleUp} from "react-icons/fa";
import {FaArrowAltCircleDown} from "react-icons/fa";
import ProductList from "../components/ProductList";
import Categories from '../components/Categories';
import basicOps from '../components/Utility/basicOps';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { usePaginationContext } from '../components/contexts/PaginationContext';

import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";




function Home() {
    /* serachTerm state for filter the whole product list according to what the user search for*/
   const [typedValue, setTypedValue] = useState(""); // to store what user is typing in the search box
const [searchTerm, setSearchTerm] = useState(""); // to store the final search term when user press enter or click search icon
    
    /* products state contain all the products initially*/
    const[products,setProducts]=useState([]);
    
    /* sortDir state is for sorting the products according to price increasing or decreasing order .initially its value is 0.*/
    /* which means product in unsorted order*/
    const[sortDir, setSortDir]=useState(0);

    /*categories state contain all the products of a particular category*/
    const[categories,setCategories]=useState([]);
    
    /*currentcategory contains what category does the usr choose*/
    const[currCategory,setCurrCategory]=useState("All Categories");
 
    // these two state variables are required to all the components . So we put this into context function. In paginationContext file it is used !!
    //const [pageSize, setPageSize]=useState(4); 
    //const[pageNum, setPageNum]=useState(1);
  

const {pageSize,pageNum,setPageNum,setPageSize}=usePaginationContext();



    /* this is used to fetch the products*/
    useEffect(()=>{
        (async function(){
            const response=await fetch("https://fakestoreapi.com/products");
            const productData= await response.json();
            setProducts(productData)

        }) ()
    },[]);

    /* to fetch the categories(eg:electronics, ornaments..etc)*/
    useEffect(()=>{
        (async function(){
            const resp=await fetch ("https://fakestoreapi.com/products/categories");
            const categoriesData =await resp.json();
            
            setCategories(categoriesData)

        })()
    },[]);
    useEffect(() => { // to handle search when typedValue changes
    if (typedValue.trim() === "") {
      setSearchTerm(""); // if input is cleared, reset searchTerm
      setPageNum(1); // reset pagination
    }
  }, [typedValue, setPageNum]);

    const ObjectFrombasicOps=basicOps(products,searchTerm,sortDir,currCategory,pageSize,pageNum);
    const filteredSortedgroupByArr=ObjectFrombasicOps.filteredSortedgroupByArr;
    const totalPages=ObjectFrombasicOps.totalPages;
    
  return ( 
   <>
   
   <header className='nav_wrapper'>
   <div className="search_sortWrapper">
  <input
    className="search_input"
    type="text"
    placeholder="Search MyKart.in"
    value={typedValue}
    onChange={(e) => setTypedValue(e.target.value)} // update typedValue as user types
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        setSearchTerm(typedValue.trim()); // update searchTerm when user presses Enter
        setPageNum(1); // reset pagination
      }
    }}
  />
   
     

  

  <div className="searchIcons_container">
    <IoSearch
      onClick={() => {
        setSearchTerm(typedValue.trim());
        setPageNum(1);
      }}
      style={{
        cursor: "pointer",
        color: "white",
        fontSize: "1.5rem"
      }}
    />
  </div>
</div>

    

  
  <div className="catagories_wrapper">
    <Categories whatsTheCategory={categories} setCurrCategory ={setCurrCategory}></Categories>
    <div className="icons_container">

        <FaArrowAltCircleUp onClick={()=>{setSortDir(1)
            setPageNum(1); // when a user arrange products in ascending order it should satrt from page no 1
        }} style={{color:"rgb(248, 163, 52)"}} fontSize="30px"/>

        <p className="sort_text">Sort by Price</p>
        <FaArrowAltCircleDown onClick={()=>{setSortDir(-1)
            setPageNum(1);// when a user arrange products in decending order it should satrt from page no 1
        }} style={{color:"rgb(248, 163, 52)"}} fontSize="30px"/>
   
    </div>
  </div>
    </header>
    
  
  <img src="src/images&logo/Ecomme img1.jpg" className='first-img'></img>
   
   
   <div className='product_wrapper'>
    <ProductList listOfProducts={filteredSortedgroupByArr}></ProductList>
 
    
  
   <div className='pagination'>
    <button className='pageicon' disabled={(pageNum == 1 || filteredSortedgroupByArr.length==0)? true : false} onClick={()=>{
  
            setPageNum((pageNum)=>pageNum-1);
           
             

    }}><FaChevronLeft fontSize="large"></FaChevronLeft></button>
    <div className="pageNum">{pageNum}</div>
    <button className='pageicon' disabled={(pageNum == totalPages || filteredSortedgroupByArr.length==0)? true : false} onClick={()=>{
        
          
        setPageNum(pageNum+1)  

           
    }}><FaChevronRight fontSize="large"></FaChevronRight></button>
   </div>
   
   </div>
   <div id="Ecommerce-Service-Section">
  <div className="services-bg-container pt-5 pb-5 p-2">
    <div className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="services-heading">Our Services</h1>
          <p className="srvices-details">
            Most online stores offer lower prices. Online shopping makes price
            comparison simpler and quicker. It is very convenient to shop from
            where you are located. It saves you the cost of driving to stores, as
            well as parking fees.
          </p>
        </div>

        <div className="col-12 mb-3 col-md-4">
          <div className="services-container shadow text-center">
            <img
              src="src\images&logo\fast-delivery-design-vector-illustration_635054-429.jpg"
              className="services-img"
              alt="Fast Delivery"
            />
            <h1 className="featurs-service">Fast and Free Delivery</h1>
            <p className="feature-detail-service">
              Fast, free, and convenient delivery choices on millions of items.
            </p>
          </div>
        </div>

        <div className="col-12 mb-3 col-md-4">
          <div className="services-container shadow text-center">
            <img
              src="src\images&logo\MoneyBackEcoomm-Photoroom.png"
              className="services-img"
              alt="Money Back Guarantee"
            />
            <h1 className="featurs-service">100% Money Back Guarantee</h1>
            <p className="feature-detail-service">
              This is probably the most popular guarantee in the world.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="services-container shadow text-center">
            <img
              src="src\images&logo\online support.jpg"
              className="services-img"
              alt="Online Support"
            />
            <h1 className="featurs-service">Online Support 24/7</h1>
            <p className="feature-detail-service mb-1">
              Our online support will provide you with many useful functions,
              valuable information, and tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="Ecommerce-Offer-Section">
  <div className="offer-section-bg pt-3 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3 order-1 order-md-2">
          <img
            src="src\images&logo\specia offer-Photoroom-Photoroom.png"
            className="offer-img"
            alt="Special Offer"
          />
        </div>

        <div className="col-12 col-md-5 order-2 order-md-3">
          <img
            src="src\images&logo\home appliances-Photoroom.png"
            className="offer-product-img"
            alt="Appliance Offer"
          />
        </div>

        <div className="col-12  col-md-4 order-3 order-md-1">
          <h1 className="offer-heading">BEST NEW YEAR SPECIAL OFFER</h1>
          <p className="offer-sub-heading">
            Best time to buy. Save up to <span className="percentage">70%</span> cash
          </p>
        </div>

     
      </div>
    </div>
  </div>
</div>


<div id="Ecommerce-Blog-Section">
      <div className="blog-bg-container pt-3 pb-5">
        <div className="container">
          <div className="row">
            {/* Section Heading */}
            <div className="col-12">
              <h1 className="blogs-heading">Trending Blogs</h1>
            </div>

            {/* Blog Card 1 */}
            <div className="col-12 col-md-6">
              <div className="blog-card shadow mt-3 mb-3">
                <img
                  src="src\images&logo\fountain pen.jpg"
                  alt="Fountain Pen Blog"
                  className="blog-img"
                />
                <h1 className="small-heading p-2">Fountain Pens</h1>
                <h2 className="main-heading p-2">Guide to Fountain Pen Nibs</h2>
                <p className="blog-deatils p-2">
                  If you're having trouble with a fountain pen — whether it's
                  scratchy, too dry, or too wet...
                </p>
                <a href="#" className="read p-3">
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                      .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                      4a.5.5 0 0 1-.708-.708L13.293 
                      8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="col-12 col-md-6">
              <div className="blog-card shadow mb-3 mt-3">
                <img
                  src="src\images&logo\TodoListBlog.jpg"
                  alt="Productivity Blog"
                  className="blog-img"
                />
                <h1 className="small-heading p-2">Productivity</h1>
                <h2 className="main-heading p-2">
                  How to Craft a Better To-Do List
                </h2>
                <p className="blog-deatils p-2">
                  A well-crafted to-do list acts as a guiding light for your day.
                  It helps you overcome...
                </p>
                <a href="#" className="read p-3">
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
                      .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                      4a.5.5 0 0 1-.708-.708L13.293 
                      8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<div id="Ecommerce-Contact-Section">
      {/* Contact header */}
      <div className="contact-container shadow-sm pt-5 pb-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                style={{
                  color: "#183b56",
                  fontSize: "50px",
                  fontWeight: "bold",
                  padding: "10px",
                }}
              >
                Let us Join Together
              </h1>
              <button
                style={{
                  borderColor: "orange",
                  backgroundColor: "white",
                  borderWidth: "3px",
                  color: "orange",
                  fontSize: "25px",
                  padding: "10px",
                }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
   <div className="ecommerce-footer-bg pt-4 pb-4 p-2">
      <div className="container">
        <div className="row">
          {/* Logo & Social icons */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="text-center pb-3 p-2 text-md-left">
              <img
                src="src\images&logo\Ecommerce_Logo-removebg-preview.png"
                className="fly-buy-img m-3"
                alt="Ecommerce logo"
              />
              <div className="d-flex flex-row justify-content-center justify-content-md-start">
  <div className="logo-container">
    <FaGoogle className="icon" />
  </div>
  <div className="logo-container">
    <FaTwitter className="icon" />
  </div>
  <div className="logo-container">
    <FaInstagram className="icon" />
  </div>
  <div className="logo-container">
    <FaLinkedin className="icon" />
  </div>
</div>

              <p className="place pt-3">Alappuzha, Keralam, 690503</p>
            </div>
          </div>

          {/* Column 1 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3 mt-3">
            <h1 className="aboutus pb-2">Get to know us</h1>
            <p className="list1">About us</p>
            <p className="list1">Career</p>
            <p className="list1">Press Releases</p>
            <p className="list1">Gift a smile</p>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-6 col-lg-3 mb-3 mt-3">
            <h1 className="aboutus pb-2">Contact with us</h1>
            <p className="list1">Facebook</p>
            <p className="list1">Twitter</p>
            <p className="list1">Instagram</p>
          </div>

          {/* Column 3 */}
          <div className="col-6 mb-3 mt-3 col-md-6 col-lg-3">
            <h1 className="aboutus pb-2">Let Us Help You</h1>
            <p className="list1">Protection</p>
            <p className="list1">Your Account</p>
            <p className="list1">Return Center</p>
            <p className="list1">Help</p>
          </div>

          {/* Footer bottom line */}
          <div className="col-12 text-center">
            <hr className="line-footer" />
            <i className="fa-regular fa-copyright icon"></i>
            <span className="creator">
              2025 by Alinahad, Created with Bootstrap
            </span>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}          

export default Home

