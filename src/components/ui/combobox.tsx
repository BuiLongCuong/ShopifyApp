// 'use client';

// import * as React from 'react';
// import { Check, ChevronsUpDown } from 'lucide-react';

// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem
// } from '@/components/ui/command';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger
// } from '@/components/ui/popover';
// import { ScrollArea } from './scroll-area';

// export type ComboboxOptions = {
//   value: string;
//   label: string;
// };

// type Mode = 'single' | 'multiple';

// interface ComboboxProps {
//   mode?: Mode;
//   options: ComboboxOptions[];
//   selected: string | string[];
//   className?: string;
//   placeholder?: string;
//   onChange?: (event: string | string[]) => void;
//   onCreate?: (value: string) => void;
//   defaultValue?: string | string[];
//   fetchOptions?: any;
// }

// export function Combobox({
//   options,
//   selected,
//   className,
//   placeholder,
//   defaultValue,
//   mode = 'single',
//   onChange,
//   onCreate,
//   fetchOptions
// }: ComboboxProps) {
//   const [open, setOpen] = React.useState(false);
//   const [query, setQuery] = React.useState<string>('');
//   const [currentOptions, setCurrentOptions] =
//     React.useState<ComboboxOptions[]>(options);
//   const [page, setPage] = React.useState<number>(1);
//   const [loading, setLoading] = React.useState<boolean>(false);
//   const [hasMore, setHasMore] = React.useState<boolean>(true);

//   const scrollRef = React.useRef<HTMLDivElement>(null);

//   React.useEffect(() => {
//     if (defaultValue) {
//       if (mode === 'multiple' && Array.isArray(defaultValue)) {
//         const matchingValues = defaultValue
//           .map((val) =>
//             options.find(
//               (option) => option.value === val || option.label === val
//             )
//           )
//           .filter(Boolean) // Ensure we filter out any `undefined` matches
//           .map((match) => match!.value); // Extract the value
//         onChange?.(matchingValues);
//       } else if (mode === 'single' && typeof defaultValue === 'string') {
//         const match = currentOptions.find(
//           (option) =>
//             option.value === defaultValue || option.label === defaultValue
//         );
//         onChange?.(match?.value!);
//       }
//     }
//   }, [defaultValue]);

//   const loadMoreOptions = async () => {
//     if (!fetchOptions || !hasMore || loading) return;
//     setLoading(true);
//     try {
//       const newOptions = await fetchOptions(query, page);
//       setCurrentOptions((prev) => [...prev, ...newOptions]);
//       setHasMore(newOptions.length > 0); // Assume no more data if the API returns an empty array
//       setPage((prev) => prev + 1);
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = async (searchQuery: string) => {
//     setQuery(searchQuery);
//     setPage(1);
//     if (fetchOptions) {
//       setLoading(true);
//       try {
//         const newOptions = await fetchOptions(searchQuery, 1);
//         setCurrentOptions(newOptions);
//         setHasMore(newOptions.length > 0);
//       } catch (error) {
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       const filteredOptions = options.filter((option) =>
//         option.label.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setCurrentOptions(filteredOptions);
//     }
//   };

//   const handleScroll = () => {
//     if (!scrollRef.current) return;
//     const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
//     if (scrollTop + clientHeight >= scrollHeight - 5) {
//       loadMoreOptions();
//     }
//   };

//   return (
//     <div className={cn('block', className)}>
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             key={'combobox-trigger'}
//             type="button"
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className="w-full justify-between"
//           >
//             {selected && selected.length > 0 ? (
//               <div className="relative mr-auto flex flex-grow flex-wrap items-center overflow-hidden">
//                 <span>
//                   {mode === 'multiple' && Array.isArray(selected)
//                     ? selected
//                         .map(
//                           (selectedValue: string) =>
//                             currentOptions.find(
//                               (item) => item.value === selectedValue
//                             )?.label
//                         )
//                         .join(', ')
//                     : mode === 'single' &&
//                       currentOptions.find((item) => item.value === selected)
//                         ?.label}
//                 </span>
//               </div>
//             ) : (
//               placeholder ?? 'Select Item...'
//             )}
//             <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-72 max-w-sm p-0">
//           <Command>
//             <CommandInput
//               placeholder={placeholder ?? 'Search Item...'}
//               value={query}
//               onValueChange={handleSearch}
//             />
//             <CommandEmpty
//               onClick={() => {
//                 if (onCreate) {
//                   onCreate(query);
//                   setQuery('');
//                 }
//               }}
//               className="flex cursor-pointer items-center justify-center gap-1 italic"
//             >
//               <p>Create: </p>
//               <p className="block max-w-48 truncate font-semibold text-primary">
//                 {query}
//               </p>
//             </CommandEmpty>
//             <ScrollArea ref={scrollRef} onScroll={handleScroll}>
//               <div className="max-h-80">
//                 <CommandGroup>
//                   {currentOptions.map((option, key) => (
//                     <CommandItem
//                       key={key}
//                       value={option.label}
//                       onSelect={(currentValue) => {
//                         if (onChange) {
//                           if (mode === 'multiple' && Array.isArray(selected)) {
//                             onChange(
//                               selected.includes(option.value)
//                                 ? selected.filter(
//                                     (item) => item !== option.value
//                                   )
//                                 : [...selected, option.value]
//                             );
//                           } else {
//                             onChange(option.value);
//                           }
//                         }
//                       }}
//                     >
//                       <Check
//                         className={cn(
//                           'mr-2 h-4 w-4',
//                           mode == 'multiple' && selected.includes(option.value)
//                             ? 'opacity-100'
//                             : 'opacity-0',
//                           mode == 'single' && selected === option.value
//                             ? 'opacity-100'
//                             : 'opacity-0'
//                         )}
//                       />
//                       {option.label}
//                     </CommandItem>
//                   ))}
//                 </CommandGroup>
//                 {loading && <p className="text-center italic">Loading...</p>}
//               </div>
//             </ScrollArea>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }
