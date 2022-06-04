export type FieldType = 'string' | 'long' | 'int' | 'record'

export type FieldItemType = {
    name: string;
    type: FieldType | [null, FieldType];
    default: string | null;
    namespace?: string;
    fields?: FieldItemType[];
}

