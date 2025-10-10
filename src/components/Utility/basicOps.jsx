// here we written the simplle js logic file so no "rfce!!!"

export default function basicOps(products,searchTerm, sortDir,currCategory,pageSize,pageNum) {
    //collecting all the required parame ters for below operations. so we need products,searchTerm,..etc..
    let filteredArr=products; //here products needed
    
    if(searchTerm != ""){
        filteredArr=filteredArr.filter((product)=>{
            let lowerSearchTerm=searchTerm.toLowerCase();
            let lowerTitle=product.title.toLowerCase();
            return lowerTitle.includes(lowerSearchTerm);

        })
    }
    /*acc and decc sorting when click on arrow*/
    let filteredSortedArr=filteredArr;
       
    if(sortDir!=0){
        if(sortDir ==1){
            filteredSortedArr=filteredSortedArr.sort(inComparator);
        

        }
        else{
            
            filteredSortedArr=filteredSortedArr.sort(decComparator);
            
        }

         
    }
    let filteredSortedgroupByArr=filteredSortedArr;
    if(currCategory !=="All Categories"){
        filteredSortedgroupByArr=filteredSortedgroupByArr.filter((product)=>{
            return product.category==currCategory; //return true if product.category==currCategory else false. so filterde only true caterory products
        })
    }
    else{
        filteredSortedgroupByArr=filteredSortedArr;
    }
    let totalPages= Math.ceil(filteredSortedgroupByArr.length/pageSize);
    /*-------------Pagination----------*/
        let startIndex=(pageNum-1)*pageSize;
        let endIndex=startIndex+pageSize;
        filteredSortedgroupByArr=filteredSortedgroupByArr.slice(startIndex,endIndex);

    return   {filteredSortedgroupByArr,totalPages};
}
function inComparator(product1,product2){
    if(product1.price>product2.price){
        return 1
    }
    else{
        return -1
    }
}
function decComparator(product1,product2){
    if(product1.price<product2.price){
        return 1
    }
    else{
        return -1
    }
}