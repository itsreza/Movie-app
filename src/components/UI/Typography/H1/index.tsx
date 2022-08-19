import './index.module.scss';

type Props = {
  children?: string | React.ReactNode;
};

const H1: React.FC<Props> = ({ children }) => <h1>{children}</h1>;

export default H1;
