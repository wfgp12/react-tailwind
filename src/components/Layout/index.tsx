import React from 'react'

type Props = {
    children : JSX.Element;
}
const Layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col mt-20'>
            {children}
        </div>
    )
}

export default Layout;