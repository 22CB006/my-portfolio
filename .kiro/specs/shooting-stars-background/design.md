# Design Document: Shooting Stars Background Integration

## Overview

This design document outlines the integration of an animated shooting stars background component into the existing React portfolio application. The component will be converted from TypeScript to JavaScript and integrated into the PageLayout component to provide a consistent, visually engaging background across all pages.

The implementation leverages React hooks (useState, useEffect, useRef) for state management and animation, SVG for rendering, and CSS for styling. The component is designed to be performant, customizable, and non-intrusive to existing page content.

## Architecture

### Component Hierarchy

```
App
└── PageLayout
    ├── Navbar
    ├── ShootingStarsBackground (new)
    │   ├── Static Stars Layer (CSS)
    │   ├── Radial Gradient Overlay (CSS)
    │   └── ShootingStars Component (x3 instances)
    ├── Page Content (children)
    └── Footer
```

### Layer Structure (z-index)

1. **Base Layer (z-index: 0)**: Dark background with static stars
2. **Gradient Layer (z-index: 1)**: Radial gradient overlay
3. **Shooting Stars Layer (z-index: 2)**: Animated SVG shooting stars
4. **Content Layer (z-index: 10)**: Navbar, page content, footer

### File Structure

```
src/
├── components/
│   ├── ui/
│   │   └── shooting-stars.js (new)
│   └── layout/
│       ├── PageLayout.js (modified)
│       └── PageLayout.css (modified)
└── lib/
    └── utils.js (existing)
```

## Components and Interfaces

### ShootingStars Component

**File**: `src/components/ui/shooting-stars.js`

**Purpose**: Renders a single layer of animated shooting stars with customizable properties.

**Props**:
```javascript
{
  minSpeed: number,        // Minimum star velocity (default: 10)
  maxSpeed: number,        // Maximum star velocity (default: 30)
  minDelay: number,        // Minimum spawn delay in ms (default: 1200)
  maxDelay: number,        // Maximum spawn delay in ms (default: 4200)
  starColor: string,       // Star tip color (default: "#9E00FF")
  trailColor: string,      // Trail start color (default: "#2EB9DF")
  starWidth: number,       // Star width in pixels (default: 10)
  starHeight: number,      // Star height in pixels (default: 1)
  className: string        // Additional CSS classes
}
```

**State**:
```javascript
{
  star: {
    id: number,           // Unique identifier (timestamp)
    x: number,            // Current x position
    y: number,            // Current y position
    angle: number,        // Movement angle in degrees
    scale: number,        // Current scale factor
    speed: number,        // Velocity in pixels per frame
    distance: number      // Total distance traveled
  } | null
}
```

**Key Functions**:

1. `getRandomStartPoint()`: Generates random starting position from viewport edges
   - Returns: `{ x: number, y: number, angle: number }`
   - Selects one of four edges randomly
   - Calculates appropriate angle for inward movement

2. `createStar()`: Initializes a new shooting star
   - Creates star object with random properties
   - Schedules next star creation with random delay

3. `moveStar()`: Updates star position each animation frame
   - Calculates new position based on angle and speed
   - Updates scale based on distance traveled
   - Removes star when it exits viewport

### PageLayout Component (Modified)

**File**: `src/components/layout/PageLayout.js`

**Changes**:
- Add ShootingStars background wrapper
- Maintain existing navbar, content, and footer structure
- Ensure proper z-index layering

**New Structure**:
```javascript
<div className="page-layout">
  {/* Background Layer */}
  <div className="shooting-stars-background">
    <div className="stars-static" />
    <div className="stars-gradient" />
    <ShootingStars {...config1} />
    <ShootingStars {...config2} />
    <ShootingStars {...config3} />
  </div>
  
  {/* Content Layer */}
  <Navbar />
  <main className="page-layout-content">
    {children}
  </main>
  <Footer />
</div>
```

## Data Models

### Star Object

```javascript
{
  id: number,           // Unique identifier (Date.now())
  x: number,            // X coordinate in pixels
  y: number,            // Y coordinate in pixels
  angle: number,        // Movement angle (45, 135, 225, or 315 degrees)
  scale: number,        // Scale factor (1 + distance/100)
  speed: number,        // Pixels per frame (random between min/max)
  distance: number      // Total pixels traveled
}
```

### Edge Start Points

```javascript
// Edge 0 (Top): y=0, x=random, angle=45° (down-right)
// Edge 1 (Right): x=width, y=random, angle=135° (down-left)
// Edge 2 (Bottom): y=height, x=random, angle=225° (up-left)
// Edge 3 (Left): x=0, y=random, angle=315° (up-right)
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Background visibility across all routes

*For any* route in the portfolio application, when the page is rendered, the shooting stars background should be visible and animating.

**Validates: Requirements 1.1**

### Property 2: Animation performance maintenance

*For any* page with the shooting stars background, the animation frame rate should remain above 30 FPS and not block user interactions with page content.

**Validates: Requirements 1.2**

### Property 3: Star lifecycle completeness

*For any* shooting star that is created, it should either be visible on screen or have been properly removed from state when it exits the viewport boundaries.

**Validates: Requirements 4.4**

### Property 4: Viewport boundary detection

*For any* shooting star position, when the star's coordinates are outside the viewport bounds (x < -20 or x > width+20 or y < -20 or y > height+20), the star should be removed from state.

**Validates: Requirements 1.5, 4.4**

### Property 5: Prop-based customization

*For any* valid prop values (minSpeed, maxSpeed, starColor, etc.), the ShootingStars component should render without errors and apply the specified configurations.

**Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**

### Property 6: Z-index layering correctness

*For any* page content element, it should have a z-index value greater than the shooting stars background, ensuring content remains interactive and visible.

**Validates: Requirements 1.4, 3.3**

### Property 7: Star spawn timing randomization

*For any* two consecutive shooting stars, the delay between their creation should fall within the configured minDelay and maxDelay range.

**Validates: Requirements 4.2**

### Property 8: Star velocity randomization

*For any* newly created shooting star, its speed value should fall within the configured minSpeed and maxSpeed range.

**Validates: Requirements 4.1**

### Property 9: Progressive scaling

*For any* shooting star, as its distance traveled increases, its scale factor should increase proportionally (scale = 1 + distance/100).

**Validates: Requirements 4.3**

### Property 10: Edge-based spawn distribution

*For any* set of generated shooting stars, they should spawn from all four edges (top, right, bottom, left) with approximately equal probability over time.

**Validates: Requirements 2.5**

## Error Handling

### Animation Frame Cleanup

**Issue**: Memory leaks from uncancelled animation frames
**Solution**: 
- Store animation frame ID from `requestAnimationFrame`
- Cancel frame in useEffect cleanup function
- Ensure cleanup runs on component unmount

```javascript
useEffect(() => {
  const animationFrame = requestAnimationFrame(moveStar);
  return () => cancelAnimationFrame(animationFrame);
}, [star]);
```

### Window Resize Handling

**Issue**: Stars may not properly detect viewport boundaries after resize
**Solution**:
- Use `window.innerWidth` and `window.innerHeight` dynamically
- Stars automatically adjust to new boundaries on next position update
- No explicit resize listener needed (handled per-frame)

### Null Star State

**Issue**: Attempting to render or animate when star is null
**Solution**:
- Check for null star before rendering SVG elements
- Use conditional rendering: `{star && <rect ... />}`
- Initialize star state as null and create first star in useEffect

### Invalid Prop Values

**Issue**: Negative or invalid prop values could break animation
**Solution**:
- Provide sensible default values for all props
- Document expected prop ranges in JSDoc comments
- Component gracefully handles edge cases (e.g., minSpeed === maxSpeed)

### SVG Gradient Definition

**Issue**: Multiple component instances may conflict with gradient IDs
**Solution**:
- Use a single shared gradient ID ("gradient")
- SVG defs are defined once per component instance
- Gradient is scoped to the SVG element

## Testing Strategy

### Unit Testing

**Framework**: Jest with React Testing Library (already configured in project)

**Test Cases**:

1. **Component Rendering**
   - ShootingStars component renders without crashing
   - Component accepts and applies custom props
   - Component renders SVG element with correct structure

2. **Prop Validation**
   - Default props are applied when not specified
   - Custom colors are applied to gradient stops
   - Custom dimensions affect star rendering

3. **Integration with PageLayout**
   - PageLayout renders ShootingStars background
   - Multiple ShootingStars instances render simultaneously
   - Background doesn't interfere with page content

### Property-Based Testing

**Framework**: fast-check (to be installed)

**Configuration**: Each property test should run a minimum of 100 iterations.

**Test Cases**:

1. **Property 4: Viewport boundary detection**
   - **Feature: shooting-stars-background, Property 4: Viewport boundary detection**
   - Generate random star positions
   - Verify stars outside bounds are removed
   - Verify stars inside bounds remain in state

2. **Property 7: Star spawn timing randomization**
   - **Feature: shooting-stars-background, Property 7: Star spawn timing randomization**
   - Generate random minDelay and maxDelay values
   - Create multiple stars and measure spawn intervals
   - Verify all intervals fall within specified range

3. **Property 8: Star velocity randomization**
   - **Feature: shooting-stars-background, Property 8: Star velocity randomization**
   - Generate random minSpeed and maxSpeed values
   - Create multiple stars
   - Verify all star speeds fall within specified range

4. **Property 9: Progressive scaling**
   - **Feature: shooting-stars-background, Property 9: Progressive scaling**
   - Generate random distance values
   - Calculate expected scale (1 + distance/100)
   - Verify scale matches formula for all distances

5. **Property 10: Edge-based spawn distribution**
   - **Feature: shooting-stars-background, Property 10: Edge-based spawn distribution**
   - Generate 1000+ stars
   - Count spawns from each edge (0-3)
   - Verify distribution is approximately uniform (20-30% per edge)

### Visual Testing

**Manual Verification**:
- Shooting stars appear and move smoothly
- Multiple layers create depth effect
- Static stars twinkle in background
- Content remains readable and interactive
- Animation performs well on different devices

### Performance Testing

**Metrics to Monitor**:
- Frame rate (should stay above 30 FPS)
- Memory usage (should not grow unbounded)
- CPU usage (should remain reasonable)
- Time to interactive (should not increase significantly)

**Tools**:
- Chrome DevTools Performance tab
- React DevTools Profiler
- Lighthouse performance audit

## Implementation Notes

### TypeScript to JavaScript Conversion

**Changes Required**:
1. Remove TypeScript type annotations
2. Convert interface definitions to JSDoc comments
3. Change file extension from `.tsx` to `.js`
4. Remove `React.FC` type annotation
5. Keep all logic and functionality identical

### CSS-in-JS vs External CSS

**Decision**: Use inline styles for static stars pattern
**Rationale**:
- Static stars use complex CSS gradients and animations
- Easier to keep styles co-located with component
- Avoids CSS file management for single-use styles
- Original demo uses inline styles

### Animation Performance

**Optimization Strategies**:
1. Use `requestAnimationFrame` for smooth 60 FPS animation
2. Limit number of simultaneous stars (one per instance)
3. Remove stars immediately when off-screen
4. Use CSS transforms for GPU acceleration
5. Avoid layout thrashing by batching DOM reads/writes

### Responsive Behavior

**Approach**: Dynamic viewport detection
- Use `window.innerWidth` and `window.innerHeight` at runtime
- Stars automatically adapt to viewport size
- No media queries needed for animation logic
- CSS handles responsive layout concerns

## Dependencies

### Existing Dependencies (No Installation Required)
- `react` (^19.2.3)
- `react-dom` (^19.2.3)
- `lucide-react` (^0.562.0) - not needed for this component
- Tailwind CSS (^3.4.19)

### Utility Functions
- `cn` from `@/lib/utils` (already exists)

### New Dependencies
None required - component uses only React built-ins and SVG.

## Migration Path

### Phase 1: Component Creation
1. Create `shooting-stars.js` in `src/components/ui/`
2. Convert TypeScript to JavaScript
3. Verify component renders in isolation

### Phase 2: Integration
1. Modify `PageLayout.js` to include background wrapper
2. Add three ShootingStars instances with different configs
3. Update `PageLayout.css` with background styles

### Phase 3: Styling
1. Add static stars CSS pattern
2. Add radial gradient overlay
3. Ensure proper z-index layering
4. Verify dark background base

### Phase 4: Testing & Refinement
1. Test on all routes
2. Verify performance
3. Adjust colors/timing if needed
4. Ensure mobile responsiveness
