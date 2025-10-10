import React from  "react" 

import { useContext, useState} from "react";

const PaginationContext=React.createContext(); //first step to create any given context .Every components(the whole components) are children and which is now inside the context. 


export default function PaginationProvider({children}){ //where the main logic that how can i avail these particular props to every childeren elements
    
    const [pageSize, setPageSize]=useState(4); 
    
    const[pageNum, setPageNum]=useState(1);
    const pageProps ={pageSize,pageNum,
                    setPageSize,setPageNum,
    } //values that should provide, which is needed by all other components

    return <PaginationContext.Provider value={pageProps}> {/*passing props*/}
        {children} {/*provide context to this given children*/}
    </PaginationContext.Provider>
} 

//exporting given context

export const usePaginationContext=()=>{
    return useContext(PaginationContext) //useContext is a hook that allows a component to consume (access) the value provided by a Context without passing it through props.
}
  
