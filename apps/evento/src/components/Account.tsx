
"use client"



export default function Account() {





    return (
        <div className="flex flex-wrap gap-3 items-center">
            <div className="items-center lg:order-last">
                <p className="text-xs opacity-50 hidden lg:block">Logged in as</p>
                <p className="text-sm font-semibold"> {"user"}</p>
            </div>

            <div className="flex items-center">

                {/*<UserButton />*/}
            </div>
        </div>
    )
}
