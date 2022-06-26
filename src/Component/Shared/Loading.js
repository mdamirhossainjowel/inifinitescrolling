import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Loading = () => {
  return (
    <div className="mx-5 lg:mx-20">

<Skeleton className=" w-full" variant="rectangular" height={50}/>
<Skeleton className=" w-full" variant="rectangular" height={70}/>
<Skeleton className=" w-full" variant="rectangular" height={70}/>
<Skeleton className=" w-full" variant="rectangular" height={70}/>
<Skeleton className=" w-full" variant="rectangular" height={70}/>
<Skeleton className=" w-full" variant="rectangular" height={70}/>
<Skeleton className=" w-full" variant="rectangular" height={40}/>



    </div>
  );
};

export default Loading;
