import { ReactElement } from 'react';

export interface FormStatusT {
  status: boolean;
  message: string;
}

export interface AuthErrorT {
  [k: string]: any;
}

export interface DefaultProps {
  children?: ReactElement | ReactElement[];
  className?: string;
}
