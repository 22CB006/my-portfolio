import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

/**
 * ShootingStars Component
 * Renders animated shooting stars with customizable properties
 * 
 * @param {Object} props - Component props
 * @param {number} [props.minSpeed=10] - Minimum star velocity
 * @param {number} [props.maxSpeed=30] - Maximum star velocity
 * @param {number} [props.minDelay=1200] - Minimum spawn delay in ms
 * @param {number} [props.maxDelay=4200] - Maximum spawn delay in ms
 * @param {string} [props.starColor="#9E00FF"] - Star tip color
 * @param {string} [props.trailColor="#2EB9DF"] - Trail start color
 * @param {number} [props.starWidth=10] - Star width in pixels
 * @param {number} [props.starHeight=1] - Star height in pixels
 * @param {string} [props.className] - Additional CSS classes
 */
const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className = ""
}) => {
  const [star, setStar] = useState(null);
  const animationFrameRef = useRef(null);

  /**
   * Generates a random number between min and max
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} Random number
   */
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  /**
   * Generates a random starting point from viewport edges
   * @returns {Object} Object with x, y coordinates and angle
   */
  const getRandomStartPoint = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const edge = Math.floor(Math.random() * 4);

    switch (edge) {
      case 0: // Top edge
        return {
          x: Math.random() * width,
          y: 0,
          angle: 45 // Move down-right
        };
      case 1: // Right edge
        return {
          x: width,
          y: Math.random() * height,
          angle: 135 // Move down-left
        };
      case 2: // Bottom edge
        return {
          x: Math.random() * width,
          y: height,
          angle: 225 // Move up-left
        };
      case 3: // Left edge
      default:
        return {
          x: 0,
          y: Math.random() * height,
          angle: 315 // Move up-right
        };
    }
  };

  /**
   * Creates a new shooting star
   */
  const createStar = () => {
    const startPoint = getRandomStartPoint();
    const speed = randomInRange(minSpeed, maxSpeed);

    const newStar = {
      id: Date.now(),
      x: startPoint.x,
      y: startPoint.y,
      angle: startPoint.angle,
      scale: 1,
      speed: speed,
      distance: 0
    };

    setStar(newStar);

    // Schedule next star creation with random delay
    const delay = randomInRange(minDelay, maxDelay);
    setTimeout(createStar, delay);
  };

  /**
   * Moves the star and updates its position
   */
  const moveStar = () => {
    setStar(prevStar => {
      if (!prevStar) return null;

      // Calculate new position based on angle and speed
      const angleRad = (prevStar.angle * Math.PI) / 180;
      const newX = prevStar.x + Math.cos(angleRad) * prevStar.speed;
      const newY = prevStar.y + Math.sin(angleRad) * prevStar.speed;
      const newDistance = prevStar.distance + prevStar.speed;

      // Calculate progressive scale based on distance traveled
      const newScale = 1 + newDistance / 100;

      // Check viewport boundaries (with buffer)
      const width = window.innerWidth;
      const height = window.innerHeight;
      const buffer = 20;

      if (
        newX < -buffer ||
        newX > width + buffer ||
        newY < -buffer ||
        newY > height + buffer
      ) {
        // Star is out of bounds, remove it
        return null;
      }

      // Update star position
      return {
        ...prevStar,
        x: newX,
        y: newY,
        distance: newDistance,
        scale: newScale
      };
    });
  };

  // Initialize first star on mount
  useEffect(() => {
    createStar();
    
    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Animation loop
  useEffect(() => {
    if (star) {
      animationFrameRef.current = requestAnimationFrame(moveStar);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [star]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {star && (
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`gradient-${star.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
              <stop offset="100%" stopColor={starColor} stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            x={star.x}
            y={star.y}
            width={starWidth * star.scale}
            height={starHeight}
            fill={`url(#gradient-${star.id})`}
            transform={`rotate(${star.angle} ${star.x} ${star.y})`}
          />
        </svg>
      )}
    </div>
  );
};

export default ShootingStars;
