import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function PageContainer({
  children,
  scrollable = true,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  className?: string;
}) {
  return (
    <>
      {scrollable ? (
        <ScrollArea className={`h-[calc(100dvh-64px)] ${className}`} {...props}>
          <div className="h-full px-4 md:px-6">{children}</div>
        </ScrollArea>
      ) : (
        <div className={`px-4 md:px-6 ${className}`}>{children}</div>
      )}
    </>
  );
}
