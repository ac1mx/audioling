import type { ColumnHelper } from '@tanstack/react-table';
import { itemListHelpers } from '@/features/ui/item-list/helpers.ts';
import { Skeleton } from '@/features/ui/skeleton/skeleton.tsx';
import { Text } from '@/features/ui/text/text.tsx';
import styles from './column.module.scss';

export function trackCountColumn<T>(columnHelper: ColumnHelper<T>) {
    return columnHelper.display({
        cell: ({ row, context }) => {
            const item = context.data || row.original;

            if (!item) return <Skeleton height={20} width={50} />;

            if (typeof item === 'object' && item) {
                if ('trackCount' in item && typeof item.trackCount === 'number') {
                    return (
                        <Text isCentered isSecondary className={styles.cell}>
                            {item.trackCount}
                        </Text>
                    );
                }
            }

            return <div className={styles.cell}>&nbsp;</div>;
        },
        header: () => <Text isCentered>Tracks</Text>,
        id: 'trackCount',
        size: itemListHelpers.table.numberToColumnSize(100, 'px'),
    });
}
