import clsx from 'clsx';
import { NavLink } from 'react-router';
import { Group } from '@/features/ui/group/group.tsx';
import { type AppIcon, Icon } from '@/features/ui/icon/icon.tsx';
import { Text } from '@/features/ui/text/text.tsx';
import styles from './nav-item.module.scss';

interface NavItemProps {
    icon: keyof typeof AppIcon;
    label: string;
    to: string;
}

export function NavItem(props: NavItemProps) {
    return (
        <NavLink
            end
            viewTransition
            className={({ isActive }) => {
                return clsx(styles.container, {
                    [styles.active]: isActive,
                });
            }}
            to={props.to}
        >
            <Group align="center" gap="md" justify="start" wrap="nowrap">
                <Icon icon={props.icon} size="lg" />
                <Text size="md">{props.label}</Text>
            </Group>
        </NavLink>
    );
}
