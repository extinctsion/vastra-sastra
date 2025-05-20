import { notFound } from "next/navigation"
import { fetchBlogPosts } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // This is a placeholder since we're redirecting to dev.to
  // In a real implementation, you might fetch the full post content here

  const posts = await fetchBlogPosts()
  const post = posts.find((p) => p.id.toString() === params.slug)

  if (!post) {
    notFound()
  }

  // Redirect to the actual dev.to article
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
        <div className="mt-4 flex items-center text-muted-foreground">
          <span>{formatDate(post.published_at)}</span>
          <span className="mx-2">•</span>
          <span>{post.reading_time_minutes} min read</span>
        </div>

        {post.cover_image && (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg">
            <Image src={post.cover_image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="mt-8 prose dark:prose-invert max-w-none">
          <p>{post.description}</p>
          <p className="mt-8">This article is hosted on DEV.to. Click below to read the full article.</p>
          <div className="mt-8">
            <Button asChild>
              <Link href={post.url} target="_blank" rel="noopener noreferrer">
                Read Full Article on DEV.to
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
