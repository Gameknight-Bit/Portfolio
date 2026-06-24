// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
import Latex from '@/components/ui/Latex'
import HoverTooltip from '@/components/ui/HoverTooltip'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // This makes <Latex /> available in all MDX files without importing it each time
    Latex,
    HoverTooltip
  }
}