export default function SkeletonFeedCard() {
  return (
    <div className="col-span-6 lg:col-span-8 px-10 mb-15">
      {/* Header: Avatar + Name + Date */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="h-3.5 w-28 bg-gray-300 rounded animate-pulse" />
          <div className="h-3 w-40 bg-gray-300 rounded animate-pulse opacity-70" />
        </div>
        {/* Bookmark + Share icons */}
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-gray-300 rounded animate-pulse opacity-70" />
          <div className="w-5 h-5 bg-gray-300 rounded animate-pulse opacity-70" />
        </div>
      </div>
 
      {/* Title */}
      <div className="space-y-2 my-5">
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
        <div className="h-4 w-4/5 bg-gray-300 rounded animate-pulse" />
      </div>
 
      {/* Image Placeholder */}
      <div className="w-full h-52 bg-gray-300 rounded-xl animate-pulse my-5" />
 
      {/* Body Text Lines */}
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-300 rounded animate-pulse opacity-80" />
        <div className="h-3 w-full bg-gray-300 rounded animate-pulse opacity-80" />
        <div className="h-3 w-5/6 bg-gray-300 rounded animate-pulse opacity-80" />
        <div className="h-3 w-3/4 bg-gray-300 rounded animate-pulse opacity-80" />
        {/* "Read More" link placeholder */}
        <div className="h-3 w-20 bg-gray-300 rounded animate-pulse opacity-60" />
      </div>
 
      {/* Footer: Stars + Views */}
      <div className="flex items-center mt-5 justify-between pt-1">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 bg-gray-300 rounded animate-pulse"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-gray-300 rounded animate-pulse opacity-70" />
          <div className="h-3 w-8 bg-gray-300 rounded animate-pulse opacity-70" />
        </div>
      </div>
    </div>
  );
}