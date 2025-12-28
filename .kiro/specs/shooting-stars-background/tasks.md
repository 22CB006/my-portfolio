# Implementation Plan: Shooting Stars Background

- [x] 1. Create the ShootingStars component





  - Convert TypeScript component to JavaScript
  - Implement star state management with useState
  - Implement random start point generation from viewport edges
  - Implement star creation logic with random delays
  - Implement star movement animation with requestAnimationFrame
  - Implement viewport boundary detection and star removal
  - Implement progressive scaling based on distance traveled
  - Add SVG rendering with gradient trail effect
  - Add proper cleanup for animation frames
  - _Requirements: 2.1, 2.2, 2.3, 2.5, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 1.1 Write property test for viewport boundary detection
  - **Property 4: Viewport boundary detection**
  - **Validates: Requirements 1.5, 4.4**

- [ ]* 1.2 Write property test for star spawn timing randomization
  - **Property 7: Star spawn timing randomization**
  - **Validates: Requirements 4.2**

- [ ]* 1.3 Write property test for star velocity randomization
  - **Property 8: Star velocity randomization**
  - **Validates: Requirements 4.1**

- [ ]* 1.4 Write property test for progressive scaling
  - **Property 9: Progressive scaling**
  - **Validates: Requirements 4.3**

- [ ]* 1.5 Write property test for edge-based spawn distribution
  - **Property 10: Edge-based spawn distribution**
  - **Validates: Requirements 2.5**



- [x] 2. Integrate ShootingStars into PageLayout component



  - Add background wrapper div with absolute positioning
  - Add static stars layer with CSS radial gradient pattern
  - Add radial gradient overlay for depth effect
  - Add three ShootingStars instances with different color configurations
  - Configure first instance with purple/cyan colors (default speeds)
  - Configure second instance with pink/yellow colors (slower speeds)
  - Configure third instance with green/blue colors (faster speeds)
  - Ensure proper component import from ui folder
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 3. Update PageLayout styles for background integration





  - Add shooting-stars-background class with fixed positioning
  - Set background to black with full viewport coverage
  - Add stars-static class with radial gradient pattern
  - Add twinkling animation keyframes for static stars
  - Add stars-gradient class with radial gradient overlay
  - Set proper z-index values for all layers (background: 0, content: 10)
  - Ensure overflow hidden on background container
  - Verify existing content styles remain unchanged
  - _Requirements: 1.4, 3.2, 3.3, 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ]* 3.1 Write unit tests for PageLayout integration
  - Test that ShootingStars background renders in PageLayout
  - Test that multiple ShootingStars instances render simultaneously
  - Test that page content remains above background (z-index)
  - Test that background doesn't interfere with navigation
  - _Requirements: 3.1, 3.3_


- [ ] 4. Checkpoint - Verify implementation across all routes



  - Ensure all tests pass, ask the user if questions arise
  - Manually test navigation to all routes (Home, Projects, Experience, About, Contact)
  - Verify shooting stars appear on every page
  - Verify smooth animation performance
  - Verify content remains interactive and readable
  - Check responsive behavior on different viewport sizes
  - _Requirements: 1.1, 1.2, 1.5_

- [ ]* 4.1 Write property test for background visibility across routes
  - **Property 1: Background visibility across all routes**
  - **Validates: Requirements 1.1**

- [ ]* 4.2 Write property test for z-index layering correctness
  - **Property 6: Z-index layering correctness**
  - **Validates: Requirements 1.4, 3.3**
