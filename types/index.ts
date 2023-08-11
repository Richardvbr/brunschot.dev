import { StaticImageData } from 'next/image';

export type WorkplaceProps = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time: string;
  location?: string;
  description: string;
};

export type StackProps = {
  category: string;
  items: string[];
};

export interface LinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface ConnectLinkProps extends LinkProps {
  filled?: boolean;
  center?: boolean;
}

export interface ConnectLinksProps {
  filled: boolean;
  center: boolean;
  className?: string;
}

export type SectionProps = {
  heading: string;
  children: React.ReactNode;
  className?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};
