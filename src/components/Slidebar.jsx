import React from 'react'
function Sidebar() {
    const sideNavs = [
        {
            items: "Blogs"
        },
        {
            items: "Auth"
        }
    ]
    return (
        <div>
            <div className='w-[10rem] bg-green-400 h-screen flex flex-row justify-center'>
                <div>
                    {sideNavs.map((val,i)=> {
                        return <div key={i} className="text-2xl mt-3 cursor-pointer">
                            {val.items}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}