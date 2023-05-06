//import React from 'react'
import Link from "next/link"
const getData = async() =>{
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res = await fetchData.json()
    return res
}

const Posts = async() => {
    const post = await getData()
    //console.log(post)
    return(
        <div>
            {
                post.map((item:any,i:number)=>{
                    return(
                        <>
                        <h3>{`${item.id}:${item.title}`}</h3>
                        <p>{item.body}</p>
                        <Link href={`/post/${item.id}`}>Go TO Post</Link>
                        </>

                    )
                })
            }
        </div>
    )
}

export default Posts