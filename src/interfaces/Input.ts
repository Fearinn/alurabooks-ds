export default interface IAbInput {
  htmlId: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'date';
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  value: string;
}
