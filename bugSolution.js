```javascript
// Corrected code using direct application of Tailwind utility classes

.my-class {
  /* Correct way to apply hover effects */
  background-color: rgb(var(--tw-bg-opacity,1) 220,38,38);
  &:hover {
    background-color: rgb(var(--tw-bg-opacity,1) 220,38,38);
  }
}

/* Or using directly tailwind classes */
.my-class {
    bg-red-500 hover:bg-red-700;
}
```