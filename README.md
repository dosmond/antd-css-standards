# Ant Design Theme Tokens & CSS Modules Demo

This project demonstrates two key concepts for modern React applications using Ant Design:

1. **Ant Design Token System**: Shows how to leverage Ant Design's token system to create consistent, maintainable design tokens that can be used throughout your application. These tokens control:

   - Spacing/margins/padding
   - Colors
   - Typography (font sizes, weights, etc.)
   - Other design variables

2. **CSS Modules vs Plain CSS**: Provides a comparison between CSS Modules and traditional CSS approaches, highlighting:
   - Style encapsulation with CSS Modules
   - Naming simplicity and reduced verbosity
   - Type safety with TypeScript integration
   - Prevention of style conflicts
   - BEM naming convention examples with plain CSS

## Key Features

- Live examples of components using both CSS Modules and plain CSS
- Visual demonstrations of style conflicts and how CSS Modules prevent them
- Integration with Ant Design's theme configuration system
- Type-safe styling with CSS Modules and TypeScript
- Examples of BEM naming convention in plain CSS components

## Getting Started

1. Explore the various components in the demo to see the differences between CSS Modules and plain CSS
2. Check out the theme configuration in `src/themes.ts` to see how Ant Design tokens are defined
3. Compare the styling approaches in:
   - `FeatureCard` (CSS Modules)
   - `PlainFeatureCard` (Plain CSS with BEM)
   - `ConflictingCard` (Plain CSS with conflicts)

## Benefits of CSS Modules

- Automatic scoping of styles to components
- Simplified class naming
- TypeScript integration for catching typos
- No need for complex naming conventions
- Better maintainability and refactoring support

## Benefits of Ant Design Token System

- Centralized theme configuration
- Easy dark mode implementation
- Consistent spacing and styling across components
- Simplified theme customization
- Better design system maintenance
