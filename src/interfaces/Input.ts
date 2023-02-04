export default interface IAbInput {
  id: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'date';
  label: string;
  placeholder?: string;
  onChange?: () => void;
  className: string;
}
