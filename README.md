# Tailwind CSS @apply Directive with Hover Pseudo-classes

This repository demonstrates an uncommon bug encountered when using Tailwind CSS's `@apply` directive with hover states or other pseudo-classes (like `:focus`, `:active`, etc.).  The `@apply` directive, while useful for reusing utility classes, doesn't correctly handle pseudo-class modifiers. This leads to unexpected behavior where styles intended for hover states may not apply as expected.

## Bug Description

The `@apply` directive, when used with pseudo-classes like `hover`, does not apply the styles correctly. The styles are applied to the base element, ignoring the pseudo-class modifier.  This will result in the hover styles never being applied.

## Solution

Avoid using the `@apply` directive with pseudo-classes. Instead, directly apply the utility classes using the modifier syntax:

```html
<button class="bg-red-500 hover:bg-red-700">Hover Me</button>
```

This ensures that the hover styles are correctly applied to the element when the user interacts with it. For more complex cases, consider separating your styling into individual classes and composing them together without relying on `@apply` for pseudo-classes.