import React from "react";


function Col(props){
    //Here we expect that we will declare the size of the 'col' in the parent component
    //For example, you may have seen in certain lines for HTML 'col-md-12'
    //the 'md-12' indidcateds the size of the column, and since we want to resze this componement we are making, it would be best if we
    //expect that it will be delcared when we render becuase we may want to change the 'size' in differenft places in the same compoenent
    
   const size = props.size.split(" ").map( size => "col" + size).join(" ");

   return <div className={size} {...props} />;

}

export default Col;