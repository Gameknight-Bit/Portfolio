// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
import Latex from '@/components/ui/Latex'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // This makes <Latex /> available in all MDX files without importing it each time
    Latex,
  }
}