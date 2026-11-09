import React from 'react'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { Footnote } from './app/components/Footnote'
import { linkSuttaText } from './lib/sutta-links'

// Get the default MDX components
const themeComponents = getThemeComponents()

const P = themeComponents.p || 'p'
const Li = themeComponents.li || 'li'
const Blockquote = themeComponents.blockquote || 'blockquote'

// Merge components
export function useMDXComponents(components) {
    return {
        ...themeComponents,
        p: (props) => React.createElement(P, props, linkSuttaText(props.children)),
        li: (props) => React.createElement(Li, props, linkSuttaText(props.children)),
        blockquote: (props) => React.createElement(Blockquote, props, linkSuttaText(props.children)),
        Footnote,
        ...components
    }
}