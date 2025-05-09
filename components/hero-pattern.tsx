export function HeroPattern() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute -bottom-[10%] right-[20%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute left-[50%] top-[50%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[60px]" />
    </div>
  )
}
