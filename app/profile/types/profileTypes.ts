export interface AvatarOption {
  id: number;
  paths: string[];
  rules?: { [key: string]: string };
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  avatarId: number;
  alias: string;
}

export interface ProfileHeaderProps {
  name: string;
  alias: string;
  avatarId: number;
  isEditing: boolean;
  avatarOptions: AvatarOption[];
  aliasOptions: string[];
  onAvatarChange: (avatarId: number) => void;
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ProfileFormProps {
  userData: UserData;
  isEditing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onEdit: () => void;
  onLogout: () => void;
}
