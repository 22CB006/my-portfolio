import { useState } from "react";
import { Badge } from "./badge";
import { GripVertical } from "lucide-react";
import { cn } from "../../lib/utils";

function ImageComparison({ 
  title = "About Me",
  subtitle = "Passionate about creating innovative solutions",
  description = "I combine technical expertise with creative problem-solving to build applications that make a difference.",
  beforeImage,
  afterImage,
  badgeText = "Developer"
}) {
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e) => {
    if (!onMouseDown) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    
    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if (e.clientX !== undefined) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant="default">{badgeText}</Badge>
          </div>
          
          <div className="flex gap-4 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tight font-bold text-cyan-400">
              {title}
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-300 font-medium">
              {subtitle}
            </p>
            <p className="text-lg max-w-2xl leading-relaxed text-gray-400">
              {description}
            </p>
          </div>
          
          <div className="pt-8 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none border-2 border-cyan-500/30 shadow-glow"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-cyan-500 h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-cyan-500 rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg hover:shadow-glow"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-5 w-5 select-none text-white" />
                </button>
              </div>
              
              <img
                src={beforeImage}
                alt="Before"
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none object-cover"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              
              <img
                src={afterImage}
                alt="After"
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ImageComparison };
