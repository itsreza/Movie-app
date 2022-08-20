import classes from './index.module.scss';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  messages: string[];
};

export default function ErrorMessage({ messages }: Props) {
  const renderErrorMessages = messages?.map((message) => <span key={uuidv4()}>{message}</span>);

  return (
    <div className={classes.root}>
      🛠 Something Went Wrong...
      <div>{renderErrorMessages}</div>
    </div>
  );
}
