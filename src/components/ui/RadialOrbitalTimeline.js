import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap } from "lucide-react";
import { Badge } from "./badge";
import { ButtonShadcn } from "./button-shadcn";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "expert":
        return "text-white bg-cyan-500 border-cyan-400";
      case "proficient":
        return "text-white bg-purple-500 border-purple-400";
      case "learning":
        return "text-white bg-gray-600 border-gray-500";
      default:
        return "text-white bg-gray-600 border-gray-500";
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0f] overflow-visible relative px-4"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center overflow-visible px-8">
        <div
          className="absolute w-full h-full flex items-center justify-center overflow-visible"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center core - Simplified */}
          <div className="absolute w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/50">
            <div className="absolute w-16 h-16 rounded-full border-2 border-cyan-400/30 animate-ping opacity-50"></div>
            <div className="w-6 h-6 rounded-full bg-white"></div>
          </div>

          {/* Orbit ring */}
          <div className="absolute w-96 h-96 rounded-full border border-cyan-500/20"></div>

          {/* Timeline nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer group/node"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 w-24 h-24 -left-7 -top-7 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-cyan-500/10 to-transparent rounded-full"></div>
                </div>

                {/* Energy glow */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                {/* Node circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isExpanded
                      ? "bg-cyan-500 text-white"
                      : isRelated
                      ? "bg-purple-500/70 text-white"
                      : "bg-gray-900 text-cyan-400"
                  } border-2 ${
                    isExpanded
                      ? "border-cyan-400 shadow-lg shadow-cyan-500/50"
                      : isRelated
                      ? "border-purple-400 animate-pulse"
                      : "border-cyan-500/40"
                  } transition-all duration-300 transform ${
                    isExpanded ? "scale-150" : "group-hover/node:scale-110"
                  }`}
                >
                  <Icon size={16} />
                </div>

                {/* Node label */}
                <div
                  className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isExpanded ? "text-cyan-400 scale-125" : "text-cyan-400 group-hover/node:text-cyan-300"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 overflow-visible z-[300]" style={{
                    maxWidth: 'calc(100vw - 2rem)',
                  }}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-cyan-500/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                          {item.status === "expert"
                            ? "EXPERT"
                            : item.status === "proficient"
                            ? "PROFICIENT"
                            : "LEARNING"}
                        </Badge>
                        <span className="text-xs font-mono text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-gray-300">
                      <p>{item.content}</p>

                      {/* Energy level */}
                      <div className="mt-4 pt-3 border-t border-cyan-500/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center text-gray-400">
                            <Zap size={10} className="mr-1 text-cyan-400" />
                            Proficiency
                          </span>
                          <span className="font-mono text-cyan-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Related skills */}
                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-cyan-500/10">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={10} className="text-gray-500 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-gray-500">
                              Related Skills
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <ButtonShadcn
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-xs"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1" />
                                </ButtonShadcn>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
