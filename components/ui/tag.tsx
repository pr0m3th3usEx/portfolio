import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const tagVariants = cva(
  'w-fit h-fit flex items-center gap-1 rounded-lg text-xs',
  {
    variants: {
      variant: {
        default: 'bg-tag-default',
        primary: 'bg-blue-500',
        success: 'bg-green-500',
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
      },
      size: {
        default: 'px-2 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface TagProps
  extends React.BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const { variant, size, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cn(tagVariants({ variant, size, className }))}
      {...rest}
    />
  );
});

Tag.displayName = 'Tag';

export default Tag;
