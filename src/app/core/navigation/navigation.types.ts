export interface NavigationItem {
  id: string;
  title: string;
  type: string;
  icon?: string;
  link?: string;
  children?: NavigationItem[];
}

export interface Navigation {
  compact: NavigationItem[];
  default: NavigationItem[];
  futuristic: NavigationItem[];
  horizontal: NavigationItem[];
}
