import { DefaultProps } from '../../../types';
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog';

interface PropTypes extends DefaultProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Modal({ children, open, onOpenChange }: PropTypes) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">{children}</DialogContent>
    </Dialog>
  );
}
