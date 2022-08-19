import classes from './index.module.scss';
type Props = {
  messages: string[];
};

export default function ErrorMessage({ messages }: Props) {
  const renderErrorMessages = messages?.map((message) => <span>{message}</span>);

  return (
    <div className={classes.root}>
      🛠 Something Went Wrong...
      <div>{renderErrorMessages}</div>
    </div>
  );
}
