import type { ColumnHelper } from '@tanstack/react-table';
import { IconButton } from '@/features/ui/icon-button/icon-button.tsx';
import { itemListHelpers } from '@/features/ui/item-list/helpers.ts';
import styles from './column.module.scss';

export function actionsColumn<T>(columnHelper: ColumnHelper<T>) {
    return columnHelper.display({
        cell: () => {
            // const item = row.original;

            return (
                <div className={styles.cell}>
                    <IconButton icon="ellipsisHorizontal" />
                </div>
            );
        },
        header: '',
        id: 'actions',
        size: itemListHelpers.table.numberToColumnSize(60, 'px'),
    });
}
