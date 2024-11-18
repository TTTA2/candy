export type Config = {
    divisions: Division[],
}

type Division = {
    id: string,
    name: string,
    templates: Tempalte[],
}

type Tempalte = {
    id: string,
    name: string,
    text?: string,
    parentId?: string,
}