'use client'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="container">
        <h1 className="title">404</h1>
        <p className="subtitle">Page Not Found</p>
        <p className="description">Sorry, the page you are looking for does not exist.</p>
        <div className="box">
          <Link href="/" className="link">Go back to Home</Link>
        </div>

        <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: calc(100vh - 200px);
                    background-color: #fff;
                    color: #333;
                    text-align: center;
                }

                .title {
                    font-size: 72px;
                    margin: 0;
                    font-weight: bold;
                }

                .subtitle {
                    font-size: 24px;
                    margin: 10px 0;
                }

                .description {
                    font-size: 16px;
                    margin: 20px 0;
                    color: #666;
                }

                .box{
                  padding: 6px 8px;
                  border-radius: 8px;
                  background-color: #007782;
                  color: #ffffffec;
                  transition: all 0.25s easy-in-out;
                }

                .box:hover{
                  background-color: #01636c;
                  color: #fff;
                }

            `}</style>

    </div>
  )
}

export default NotFound