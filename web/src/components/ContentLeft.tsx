export function ContentLeft() {
  return (
    <>
      {/* Blur */}
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

      {/* Stripes */}
      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
    </>
  )
}
