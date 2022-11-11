export type TError = {
    name: string
    description: string
}

export type TCallBack = (type: string, errorArray?: TError[]) => void
