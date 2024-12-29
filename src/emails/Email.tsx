import { Html, Button } from '@react-email/components';

type PropTypes = {
  url: string;
};

export default function Email(props: PropTypes) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}
