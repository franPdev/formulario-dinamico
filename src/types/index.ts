export type Campo = {
  name: string;
  label: string;
  type: string;
  default?: string;
  options?: string[];

  validation?: {
    type: string;
    message: string;
    value?: number;
    pattern?: string;
    rules?: Record<string, any>;
  }[];
};
