export declare type MenuMode = 'horizontal' | 'vertical' | 'vertical-left' | 'vertical-right' | 'inline';

interface FieldType {
  key: string;
  icon: any;
  value: string;
}

interface NavProps {
  fields: FieldType[];
  onClick?: ()=>void;
  selectedKeys: string[];
  mode: MenuMode;
}
