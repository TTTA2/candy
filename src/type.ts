export type Config = {
    divisions: Division[],
}

export type Division = {
    id: string,
    name: string,
    templates: Tempalte[],
}

export type Tempalte = {
    id: string,
    name: string,
    text?: string,
    parentId?: string,
}

export type IdTextPair = {
    id: string,
    text: string,
}