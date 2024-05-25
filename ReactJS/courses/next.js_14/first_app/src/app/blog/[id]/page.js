
export default function BlogPostPage({ params }) {
    const { id } = params;

    return (
        <main>
            <p>Blog Post {id}</p>
        </main>
    )
}