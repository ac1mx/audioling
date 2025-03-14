import type { ItemListCellProps, ItemListColumn } from '@/features/ui/item-list/helpers.ts';
import { numberToColumnSize } from '@/features/ui/item-list/helpers.ts';
import { EmptyCell } from '@/features/ui/item-list/item-table/columns/shared.tsx';
import { Text } from '@/features/ui/text/text.tsx';
import styles from './column.module.scss';

function Cell({ item }: ItemListCellProps) {
    if (!item) {
        return <EmptyCell />;
    }

    if (typeof item === 'object' && item) {
        if ('userPlayCount' in item && typeof item.userPlayCount === 'number') {
            return (
                <Text isCentered isSecondary className={styles.cell}>
                    {item.userPlayCount > 0 ? item.userPlayCount : ''}
                </Text>
            );
        }
    }

    return <EmptyCell />;
}

export const playCountColumn = {
    cell: Cell,
    header: () => (
        <Text isCentered isUppercase>
            Plays
        </Text>
    ),
    id: 'playCount' as ItemListColumn.PLAY_COUNT,
    size: numberToColumnSize(50, 'px'),
};
