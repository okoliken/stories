import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function App() {
 

  return (
    <div className="flex justify-center items-center h-screen">
 <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-lg"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="p-1">
              <Card className="rounded-full w-[4.25rem] h-[4.25rem]">
                <CardContent className="flex items-center justify-center p-2">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default App
