import { forwardRef } from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react';
import type { Sizes } from '@/themes/index.ts';
import styles from './group.module.scss';

interface GroupProps extends React.ComponentPropsWithoutRef<'div'> {
    align?: 'start' | 'center' | 'end' | 'between';
    children: React.ReactNode;
    className?: string;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
    grow?: boolean;
    h?: string;
    justify?: 'start' | 'center' | 'end' | 'between';
    m?: Sizes;
    mah?: string;
    maw?: string;
    mih?: string;
    miw?: string;
    mx?: Sizes;
    my?: Sizes;
    p?: Sizes;
    px?: Sizes;
    py?: Sizes;
    w?: string;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export const Group = forwardRef<HTMLDivElement, GroupProps>((props: GroupProps, ref) => {
    const {
        align,
        className,
        children,
        gap = 'md',
        grow,
        justify,
        wrap = 'nowrap',
        w,
        h,
        m,
        mah,
        maw,
        mih,
        miw,
        mx,
        my,
        p,
        px,
        py,
        style,
        ...htmlProps
    } = props;

    const classNames = clsx(className, {
        [styles.group]: true,
        [styles.grow]: grow,
        [styles.gapXs]: gap === 'xs',
        [styles.gapSm]: gap === 'sm',
        [styles.gapMd]: gap === 'md',
        [styles.gapLg]: gap === 'lg',
        [styles.gapXl]: gap === 'xl',
        [styles.marginXSm]: mx === 'sm' || m === 'sm',
        [styles.marginXMd]: mx === 'md' || m === 'md',
        [styles.marginXlg]: mx === 'lg' || m === 'lg',
        [styles.marginXxl]: mx === 'xl' || m === 'xl',
        [styles.marginYSm]: my === 'sm' || m === 'sm',
        [styles.marginYMd]: my === 'md' || m === 'md',
        [styles.marginYlg]: my === 'lg' || m === 'lg',
        [styles.marginYxl]: my === 'xl' || m === 'xl',
        [styles.paddingXSm]: px === 'sm' || p === 'sm',
        [styles.paddingXMd]: px === 'md' || p === 'md',
        [styles.paddingXlg]: px === 'lg' || p === 'lg',
        [styles.paddingXxl]: px === 'xl' || p === 'xl',
        [styles.paddingYSm]: py === 'sm' || p === 'sm',
        [styles.paddingYMd]: py === 'md' || p === 'md',
        [styles.paddingYlg]: py === 'lg' || p === 'lg',
        [styles.paddingYxl]: py === 'xl' || p === 'xl',
        [styles.justifyStart]: justify === 'start',
        [styles.justifyCenter]: justify === 'center',
        [styles.justifyEnd]: justify === 'end',
        [styles.justifyBetween]: justify === 'between',
        [styles.alignStart]: align === 'start',
        [styles.alignCenter]: align === 'center',
        [styles.alignEnd]: align === 'end',
        [styles.alignBetween]: align === 'between',
        [styles.wrap]: wrap === 'wrap',
        [styles.noWrap]: wrap === 'nowrap' || !wrap,
    });

    return (
        <div
            ref={ref}
            className={classNames}
            style={{
                height: h,
                maxHeight: mah,
                maxWidth: maw,
                minHeight: mih,
                minWidth: miw,
                width: w,
                ...style,
            }}
            {...htmlProps}
        >
            {children}
        </div>
    );
});

export const MotionGroup = motion.create(Group);

Group.displayName = 'Group';
