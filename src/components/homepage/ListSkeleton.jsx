import React from 'react';

const ListSkeleton = () => {
    return (
        <div className='w-full flex flex-col gap-2 px-4 mt-3'>
            {[...Array(8)].map((_,i)=><div key={i} className='w-full py-2 px-3 h-5 bg-gray-300 animate-pulse'></div>)}
        </div>
    );
};

export default ListSkeleton;