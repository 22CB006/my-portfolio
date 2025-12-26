# Tests Directory

## Structure

- **properties/** - Property-based tests using fast-check
- **integration/** - Integration tests for routing and user flows

## Conventions

- Property tests verify universal properties across all inputs
- Each property test must run minimum 100 iterations
- Tag each property test with: `// Feature: portfolio-website, Property {number}: {property_text}`
- Integration tests verify complete user workflows
- Use React Testing Library for component testing
