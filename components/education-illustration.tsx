import Image from "next/image"

export function EducationIllustration() {
  return (
    <div className="relative aspect-square w-full">
      <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-1">
        <div className="h-full w-full overflow-hidden rounded-[22px] bg-background">
          <div className="relative h-full w-full">
            <Image
              src="/placeholder.svg?height=500&width=500&text=Teaching"
              alt="Teaching"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 h-32 w-32 overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-lg">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=200&width=200&text=Workshop"
            alt="Workshop"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute -right-4 -top-4 h-32 w-32 overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-lg">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image src="/placeholder.svg?height=200&width=200&text=Award" alt="Award" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}
