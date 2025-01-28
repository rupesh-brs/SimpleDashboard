import React from 'react';

export default function ChildrenComponent({ bgColor, content, icon, value }) {
    return (
        <div className="flex items-center justify-center flex-wrap hover:shadow-inner">
            <div className={`card ${bgColor} shadow-lg rounded-lg p-3 m-2 sm:m-4 w-full sm:w-64 h-24 flex-shrink-0`}>
                <div className="card-body flex items-center">
                    {icon && <span className="mr-2">{icon}</span>}
                    <h2 className="card-title text-xl font-semibold">{content}</h2>
                    <span className='text-2xl justify-center items-center text-center px-3'>{value}</span>
                </div>
            </div>
        </div>
    );
}
