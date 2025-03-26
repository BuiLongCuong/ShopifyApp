import { toast } from 'sonner';

type FilterCriteria<T> = (item: T) => boolean;

export const filterItemsByCriteria = <T>(
  items: T[],
  criteria: FilterCriteria<T>,
  childKey: keyof T | null = null
): T[] => {
  return items
    .filter(criteria)
    .map((item) => {
      if (childKey && Array.isArray(item[childKey])) {
        return {
          ...item,
          [childKey]: filterItemsByCriteria(item[childKey] as T[], criteria, childKey),
        };
      }
      return item;
    });
};

export const handleClickCopy = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Keyword is copied');
      })
      .catch((err) => {
        toast.error(`Failed to copy keyword, please enter ${text} instead`);
      });
  } else {
    try {
      const input = document.createElement('textarea');
      input.value = text;
      input.style.position = 'absolute';
      input.style.left = '-9999px'; // Move the input out of view
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      toast.success('Keyword is copied');
    } catch (err) {
      toast.error(`Failed to copy keyword, please enter ${text} instead`);
    }
  }
};
