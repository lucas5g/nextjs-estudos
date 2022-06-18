const Blog = () => {
    return (
        <div>
            Minha página
        </div>
    )
}


export default Blog

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}