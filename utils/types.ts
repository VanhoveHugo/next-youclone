export type videosList = {
    videos: Array<object>
}
export type video = {
    video: Array<object>
}

export type LayoutProps = {
    children?: React.ReactNode
    ariane?: boolean
    menu?: boolean
}

export type MenuProps = {
    state?: boolean
}