export interface ActionConfirmationPromptProps {
  userId: number;
  isOpen: boolean;
  onCancel: () => void;
  onDelete: (userId: number) => void;
}
