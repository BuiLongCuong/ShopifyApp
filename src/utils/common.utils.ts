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
