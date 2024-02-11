export type GetPositionsRequest = {
    Page: number;
    PageSize: number;
    
    SortField: string;
    SortDirection: boolean;
    
    MinPrice?: number;
    MaxPrice?: number;
    MinWeight?: number;
    MaxWeight?: number;
    MinCalories?: number;
    MaxCalories?: number;
}