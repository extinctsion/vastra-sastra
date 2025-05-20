import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  // Sample portfolio categories and items
  const categories = ["All", "B2B Collections", "B2C Collections", "Custom Designs"]

  const portfolioItems = [
    {
      id: 1,
      title: "Summer Essentials",
      category: "B2C Collections",
      description: "Lightweight, breathable fabrics designed for warm weather comfort.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Corporate Uniforms",
      category: "B2B Collections",
      description: "Professional attire designed for corporate environments with brand customization.",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Luxury Evening Wear",
      category: "Custom Designs",
      description: "Bespoke evening wear created for special events and red carpet appearances.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Sustainable Basics",
      category: "B2C Collections",
      description: "Eco-friendly essential pieces made from organic and recycled materials.",
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Hospitality Uniforms",
      category: "B2B Collections",
      description: "Functional and stylish uniforms for hotels, restaurants, and service industries.",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Athleisure Line",
      category: "B2C Collections",
      description: "Performance wear that transitions seamlessly from workout to casual settings.",
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Bridal Collection",
      category: "Custom Designs",
      description: "Handcrafted wedding attire with meticulous attention to detail and personalization.",
      image: "https://images.unsplash.com/photo-1470816692786-37612e4f7ef4?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Healthcare Uniforms",
      category: "B2B Collections",
      description: "Comfortable and practical uniforms for healthcare professionals.",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Winter Outerwear",
      category: "B2C Collections",
      description: "Insulated, weather-resistant coats and jackets for cold climates.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop",
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Explore our diverse range of fashion projects for both B2B and B2C markets.
        </p>
      </div>

      <Tabs defaultValue="All" className="mt-12">
        <div className="flex justify-center">
          <TabsList className="mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems
                .filter((item) => category === "All" || item.category === category)
                .map((item) => (
                  <div key={item.id} className="group overflow-hidden rounded-lg border">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={600}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                      <Button variant="link" className="mt-2 p-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Need a Custom Fashion Solution?</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
          We specialize in creating bespoke fashion designs for both businesses and individual clients.
        </p>
        <div className="mt-6">
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
