import { fetchBlogPosts } from "@/lib/blog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

export async function BlogList() {
  const posts = await fetchBlogPosts()

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">No blog posts found</h3>
        <p className="text-muted-foreground mt-2">Please check your API key configuration or try again later.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.id} className="flex flex-col overflow-hidden">
          <div className="aspect-video relative overflow-hidden">
            {post.cover_image ? (
              <Image src={post.cover_image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No image</span>
              </div>
            )}
          </div>
          <CardHeader className="flex-1">
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription>
              {formatDate(post.published_at)} • {post.reading_time_minutes} min read
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground line-clamp-3">{post.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                Read Article
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
