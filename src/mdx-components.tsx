import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      // components={{ ...components, ...(props.components || {}) }}
    />
  );
}
