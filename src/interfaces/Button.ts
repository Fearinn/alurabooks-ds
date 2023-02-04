export default interface IAbButton {
  text?: string;
  customType?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string
}
