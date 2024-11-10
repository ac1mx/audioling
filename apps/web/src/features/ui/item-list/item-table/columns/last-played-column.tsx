import type { ColumnHelper } from '@tanstack/react-table';
import { itemListHelpers } from '@/features/ui/item-list/helpers.ts';
import { Skeleton } from '@/features/ui/skeleton/skeleton.tsx';
import styles from './column.module.scss';

export function lastPlayedColumn<T>(columnHelper: ColumnHelper<T>) {
    return columnHelper.display({
        cell: ({ row }) => {
            const item = row.original;

            if (typeof item === 'object' && item) {
                if ('lastPlayed' in item && typeof item.lastPlayed === 'string') {
                    return <div className={styles.cell}>{item.lastPlayed}</div>;
                }
            }

            return <Skeleton height={20} width={100} />;
        },
        header: 'Last Played',
        id: 'lastPlayed',
        size: itemListHelpers.table.numberToColumnSize(100, 'px'),
    });
}
