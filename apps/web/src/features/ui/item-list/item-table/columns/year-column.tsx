import type { ColumnHelper } from '@tanstack/react-table';
import { itemListHelpers } from '@/features/ui/item-list/helpers.ts';
import { Skeleton } from '@/features/ui/skeleton/skeleton.tsx';
import styles from './column.module.scss';

export function yearColumn<T>(columnHelper: ColumnHelper<T>) {
    return columnHelper.display({
        cell: ({ row }) => {
            const item = row.original;

            if (typeof item === 'object' && item) {
                if ('year' in item && typeof item.year === 'number') {
                    return <div className={styles.cell}>{item.year}</div>;
                }
            }

            return <Skeleton height={20} width={50} />;
        },
        header: 'Year',
        id: 'year',
        size: itemListHelpers.table.numberToColumnSize(50, 'px'),
    });
}
