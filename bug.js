```javascript
// Example using Tailwind's `@apply` directive incorrectly

.my-class {
  @apply bg-red-500 hover:bg-red-700;
}

/* This will produce an unexpected result because hover doesn't work with @apply */
```