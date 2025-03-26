export interface ICatalog {
    id: number;
    shop: string;
    name: string;
    catalogIdPlatform?: string;
    adAccount?: string;
    adAccountName?: string;
    productCount?: number;
    feedCount?: number;
    platform: string;
    status: boolean;
    viewError?: string;
    rule?: any;
    createdAt?: Date;
    updatedAt?: Date;
}
