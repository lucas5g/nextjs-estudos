import { useRouter } from "next/router"

const Post = () => {
    return (
        <div>
           <p>Post: {useRouter().query.pid} </p>
        </div>
    )
}


export default Post

