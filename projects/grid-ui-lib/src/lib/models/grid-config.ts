export interface Column{
    field: string;
    title: string,
    type?: string
}

export interface RowData{

}

export interface GridConfig{
    columnConfig:Column[],
    rowData?:any[]
}