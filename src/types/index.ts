export interface NavItem {
    title: string;
    url: string;
    icon?: React.ComponentType<any>;
    isActive?: boolean;
    items?: NavItem[];
  }

  export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
  }
  
  export interface NavItemWithOptionalChildren extends NavItem {
    items?: NavItemWithChildren[];
  }

  export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
  