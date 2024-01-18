declare module "@sanity/block-content-to-react" {
  import * as React from "react"

  export interface BlockContentProps {
    blocks: any[] | any
    className?: string
    renderContainerOnSingleChild?: boolean
    serializers?: {
      types?: Record<string, (props: any) => JSX.Element | null>
      marks?: Record<string, (props: any) => JSX.Element | null>
      list?: React.Component
      listItem?: React.Component
      hardBreak?: React.Component
      container?: React.Component
    }
    imageOptions?: any
    projectId?: string
    dataset?: string
  }
  export default function BlockContent(props: BlockContentProps): JSX.Element
}
