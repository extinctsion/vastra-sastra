"use server"

// Define the blog post type
export interface BlogPost {
  id: number
  title: string
  description: string
  published_at: string
  url: string
  cover_image: string | null
  reading_time_minutes: number
  tag_list: string[]
  user: {
    name: string
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // Get the API key from environment variables
    const apiKey = process.env.DEV_TO_API_KEY

    if (!apiKey) {
      console.error("DEV_TO_API_KEY environment variable is not set")
      return []
    }

    const response = await fetch("https://dev.to/api/articles/me", {
      headers: {
        "api-key": apiKey,
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data as BlogPost[]
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}
