export default interface IButton {
  text?: string;
  customType?: 'primary' | 'secondary';
  onClick?: () => void;
}
