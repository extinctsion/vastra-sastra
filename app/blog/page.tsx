import { Suspense } from "react"
import { BlogList } from "@/components/blog-list"
import { BlogSkeleton } from "@/components/blog-skeleton"

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Insights, trends, and updates from the world of fashion.
        </p>
      </div>

      <div className="mt-12">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogList />
        </Suspense>
      </div>
    </div>
  )
}
