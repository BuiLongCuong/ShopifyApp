export interface IPixel {
    id: number;
    pixelId: string;
    name: string;
    adAccount?: string;
    lstCollects?: string;
    lstProducts?: string;
    lstTags?: string;
    lstEvents?: string;
    shop: string;
    targetArea?: string;
    status: boolean;
    isActiveCApi: boolean;
    testEventCode?: string;
    accessTokenFB?: string;
    mode?: string;
    platform: string;
    createdAt?: Date;
    updatedAt?: Date;
}
  