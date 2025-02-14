export interface NavItem {
    title: string;
    url: string;
    icon?: React.ComponentType<any>;
    isActive?: boolean;
    items?: NavItem[];
};

export interface IGetListResponse<T> {
  status: number;
  message: string;
  code: number;
  data: T[];
  total: number;
  page: number;
}

export interface IResponseFail {
  status: number;
  errorCode: number;
  message: string;
  data: [];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
  
export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
  