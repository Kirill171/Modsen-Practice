export const priorities = ['No priority', 'Low', 'Medium', 'High'] as const;
import { theme } from '@/constants/theme';

export type Priority = (typeof priorities)[number] | null;

export const priorityBackgroundColors: Record<
  Exclude<Priority, null>,
  string
> = {
  'No priority': theme.colors.lightBlue,
  Low: theme.colors.lightGreen,
  Medium: theme.colors.lightBlue,
  High: theme.colors.lightRed
};

export const priorityColors: Record<Exclude<Priority, null>, string> = {
  'No priority': theme.colors.black,
  Low: theme.colors.green,
  Medium: theme.colors.blue,
  High: theme.colors.red
};
