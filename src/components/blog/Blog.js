import React from 'react'
import Blog1 from '../blogContent/blog1/Blog1'
import Blog2 from '../blogContent/blog2/Blog2'

const Blog = () => {
    return (
        <div>
            <Blog1 />
            <Blog2 />

            <div className="scrollbtn">
                <i className="fas fa-arrow-up"></i>
            </div>
        </div>
    )
}

export default Blog