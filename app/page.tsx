import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Fashion Brand
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Innovative clothing designs for both B2B and B2C markets. Discover our unique collections and custom
                  solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/portfolio">
                  <Button size="lg">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1920&auto=format&fit=crop"
                alt="Fashion Collection"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Fashion Solutions for Every Need</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From B2B wholesale collections to B2C custom designs, we provide comprehensive fashion services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Custom Designs</h3>
              <p className="text-center text-muted-foreground">
                Unique clothing designs tailored to your brand identity and target audience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">B2B Solutions</h3>
              <p className="text-center text-muted-foreground">
                Wholesale collections and manufacturing partnerships for businesses.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">B2C Collections</h3>
              <p className="text-center text-muted-foreground">
                Direct-to-consumer fashion lines with unique styles and quality materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Recent Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest fashion projects and collections.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=600&auto=format&fit=crop"
                  alt="Fashion Collection 1"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="text-xl font-bold">Summer Collection</h3>
                  <p className="text-sm text-gray-200">Spring/Summer 2023</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop"
                  alt="Fashion Collection 2"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="text-xl font-bold">Autumn Essentials</h3>
                  <p className="text-sm text-gray-200">Fall/Winter 2023</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop"
                  alt="Fashion Collection 3"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="text-xl font-bold">Evening Wear</h3>
                  <p className="text-sm text-gray-200">Special Collection</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=600&auto=format&fit=crop"
                  alt="Fashion Collection 4"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="text-xl font-bold">Casual Wear</h3>
                  <p className="text-sm text-gray-200">Everyday Collection</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=600&auto=format&fit=crop"
                  alt="Fashion Collection 5"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="text-xl font-bold">Sustainable Line</h3>
                  <p className="text-sm text-gray-200">Eco-friendly Collection</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                  alt="Fashion Collection 6"
                  width={600}
                  height={600}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <h3 className="text-xl font-bold">Designer Collection</h3>
                  <p className="text-sm text-gray-200">Premium Line</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Fashion Brand?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's collaborate on your next fashion project. Contact us today to get started.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
