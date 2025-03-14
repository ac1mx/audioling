import type { AppThemeConfiguration } from '@/themes/index.ts';

const primaryColor = 'rgb(145, 83, 187)';
const dangerColor = 'rgb(197, 15, 31)';

const gap = {
    lg: '2rem',
    md: '1rem',
    sm: '0.5rem',
    xl: '4rem',
    xs: '0.25rem',
};

const fontSize = {
    lg: '1rem',
    md: '0.75rem',
    sm: '0.675rem',
    xl: '1.25rem',
    xs: '0.625rem',
};

const fontWeight = {
    lg: '600',
    md: '500',
    sm: '400',
    xl: '700',
    xs: '300',
};

const titleFontSize = {
    lg: '1.5rem',
    md: '1rem',
    sm: '0.75rem',
    xl: '2rem',
    xs: '0.875rem',
};

const titleFontWeight = {
    lg: '800',
    md: '600',
    sm: '500',
    xl: '900',
    xs: '400',
};

const radius = {
    lg: '0.75rem',
    md: '0.25rem',
    sm: '0.125rem',
    xl: '1rem',
    xs: '0rem',
};

export const baseTheme: AppThemeConfiguration['theme'] = {
    'base-border-radius-lg': radius.lg,
    'base-border-radius-md': radius.md,
    'base-border-radius-sm': radius.sm,
    'base-border-radius-xl': radius.xl,
    'base-border-radius-xs': radius.xs,
    'base-font-size-lg': fontSize.lg,
    'base-font-size-md': fontSize.md,
    'base-font-size-sm': fontSize.sm,
    'base-font-size-xl': fontSize.xl,
    'base-font-size-xs': fontSize.xs,
    'base-font-weight-lg': fontWeight.lg,
    'base-font-weight-md': fontWeight.md,
    'base-font-weight-sm': fontWeight.sm,
    'base-font-weight-xl': fontWeight.xl,
    'base-font-weight-xs': fontWeight.xs,
    'base-gap-lg': gap.lg,
    'base-gap-md': gap.md,
    'base-gap-sm': gap.sm,
    'base-gap-xl': gap.xl,
    'base-gap-xs': gap.xs,
    'base-title-font-size-lg': titleFontSize.lg,
    'base-title-font-size-md': titleFontSize.md,
    'base-title-font-size-sm': titleFontSize.sm,
    'base-title-font-size-xl': titleFontSize.xl,
    'base-title-font-size-xs': titleFontSize.xs,
    'base-title-font-weight-lg': titleFontWeight.lg,
    'base-title-font-weight-md': titleFontWeight.md,
    'base-title-font-weight-sm': titleFontWeight.sm,
    'base-title-font-weight-xl': titleFontWeight.xl,
    'base-title-font-weight-xs': titleFontWeight.xs,
    'breakpoint-lg': '62rem',
    'breakpoint-md': '48rem',
    'breakpoint-sm': '36rem',
    'breakpoint-xl': '75rem',
    'breakpoint-xxl': '90rem',
    'breakpoint-xxxl': '160rem',
    'button-danger-background-color': dangerColor,
    'button-danger-border': `1px solid ${dangerColor}`,
    'button-danger-font-color': 'rgb(230, 230, 230)',
    'button-danger-hover-background-color': 'rgba(197, 15, 31, 0.8)',
    'button-danger-hover-border': '1px solid rgb(197, 15, 31)',
    'button-danger-hover-font-color': 'rgb(230, 230, 230)',
    'button-default-background-color': 'rgba(0, 0, 0, 0)',
    'button-default-border': '1px solid rgba(0, 0, 0, 0)',
    'button-default-font-color': 'rgb(230, 230, 230)',
    'button-default-hover-background-color': 'rgb(25, 25, 25)',
    'button-default-hover-border': '1px solid rgba(0, 0, 0, 0)',
    'button-default-hover-font-color': 'rgb(230, 230, 230)',
    'button-filled-background-color': 'rgb(235, 235, 235)',
    'button-filled-border': '1px solid rgba(0, 0, 0, 0)',
    'button-filled-font-color': 'rgb(25, 25, 25)',
    'button-filled-hover-background-color': 'rgb(150, 150, 150)',
    'button-filled-hover-border': '1px solid rgba(0, 0, 0, 0)',
    'button-filled-hover-font-color': 'rgb(25, 25, 25)',
    'button-outline-background-color': 'rgba(0, 0, 0, 0)',
    'button-outline-border': '1px solid rgba(48, 48, 48, 1)',
    'button-outline-font-color': 'var(--global-font-color)',
    'button-outline-hover-background-color': 'rgba(0, 0, 0, 0)',
    'button-outline-hover-border': '1px solid rgba(100, 100, 100, 1)',
    'button-outline-hover-font-color': 'var(--global-font-color)',
    'button-primary-background-color': primaryColor,
    'button-primary-border': `1px solid ${primaryColor}`,
    'button-primary-font-color': 'rgb(255, 255, 255)',
    'button-primary-hover-background-color': 'rgba(145, 83, 187, 0.8)',
    'button-primary-hover-border': '1px solid rgb(145, 83, 187)',
    'button-primary-hover-font-color': 'rgb(255, 255, 255)',
    'button-subtle-background-color': 'rgba(0, 0, 0, 0)',
    'button-subtle-border': '1px solid rgba(0, 0, 0, 0)',
    'button-subtle-font-color': 'var(--global-font-secondary-color)',
    'button-subtle-hover-background-color': 'rgba(0, 0, 0, 0)',
    'button-subtle-hover-border': '1px solid rgba(0, 0, 0, 0)',
    'button-subtle-hover-font-color': 'var(--global-font-color)',
    'checkbox-background-color': 'rgba(255, 255, 255, 1)',
    'checkbox-border': '1px solid rgba(0, 0, 0, 0)',
    'checkbox-border-radius': radius.md,
    'checkbox-checked-background-color': 'var(--global-primary-color)',
    'checkbox-checked-border-color': 'var(--global-primary-color)',
    'global-background-color': 'rgb(3, 3, 3)',
    'global-danger-color': dangerColor,
    'global-font-color': 'rgb(230, 230, 230)',
    'global-font-family': 'Poppins, "Noto Sans JP", sans-serif',
    'global-font-monospace-family': 'Inter, "Noto Sans JP", monospace',
    'global-font-secondary-color': 'rgb(120, 120, 120)',
    'global-font-size': '16px',
    'global-info-color': 'rgb(50, 50, 204)',
    'global-primary-color': primaryColor,
    'global-success-color': 'rgb(50, 204, 50)',
    'global-warning-color': 'rgb(240, 173, 78)',
    'input-background-color': 'rgb(20, 20, 20)',
    'input-border': '1px solid rgba(60, 60, 60, 0.1)',
    'input-font-color': 'rgb(230, 230, 230)',
    'input-hover-background-color': 'rgb(24, 24, 24)',
    'input-hover-border': '1px solid rgba(60, 60, 60, 0.1)',
    'input-hover-font-color': 'rgb(230, 230, 230)',
    'input-hover-placeholder-color': 'var(--global-font-secondary-color)',
    'input-indicator-background-color': 'rgb(59, 59, 59)',
    'input-placeholder-color': 'var(--global-font-secondary-color)',
    'layout-base-border-radius': radius.sm,
    'layout-base-padding': 0,
    'layout-border-color': 'rgb(30, 30, 30)',
    'layout-border-focus-color': 'rgba(255, 255, 255, 0.1)',
    'layout-content-background-color': 'rgb(13, 13, 13)',
    'layout-content-padding': `${gap.sm} ${gap.md}`,
    'layout-divider-color': 'rgba(32, 32, 32, 1)',
    'layout-divider-height': '1px',
    'layout-drag-handle-background-color': 'rgba(255, 255, 255, 0.1)',
    'layout-header-background-color': 'rgb(0, 0, 0)',
    'layout-header-height': '40px',
    'layout-nav-bar-bottom-background-color': 'rgb(18, 18, 18)',
    'layout-nav-bar-bottom-border-bottom': '',
    'layout-nav-bar-bottom-border-left': '',
    'layout-nav-bar-bottom-border-right': '',
    'layout-nav-bar-bottom-border-top': '1px solid rgb(60, 60, 60)',
    'layout-nav-bar-bottom-font-color': 'rgb(182, 182, 182)',
    'layout-nav-bar-bottom-height': '65px',
    'layout-nav-bar-bottom-item-hover-background-color': '',
    'layout-nav-bar-bottom-item-hover-font-color': '',
    'layout-nav-bar-side-background-color': 'rgb(18, 18, 18)',
    'layout-nav-bar-side-border-bottom': '',
    'layout-nav-bar-side-border-left': '',
    'layout-nav-bar-side-border-right': '',
    'layout-nav-bar-side-border-top': '',
    'layout-nav-bar-side-font-color': 'rgb(182, 182, 182)',
    'layout-nav-bar-side-height': '65px',
    'layout-nav-bar-side-item-hover-background-color': '',
    'layout-nav-bar-side-item-hover-font-color': '',
    'layout-nav-bar-side-padding': gap.sm,
    'layout-player-bar-background-color': 'rgb(3, 3, 3)',
    'layout-player-bar-border-bottom': '1px solid transparent',
    'layout-player-bar-border-left': '1px solid transparent',
    'layout-player-bar-border-radius': '0',
    'layout-player-bar-border-right': '1px solid transparent',
    'layout-player-bar-border-top': '1px solid transparent',
    'layout-player-bar-height': '85px',
    'layout-player-bar-padding': gap.sm,
    'layout-side-nav-bar-background-color': 'rgb(29, 29, 29)',
    'layout-side-nav-bar-font-color': 'rgb(255, 255, 255)',
    'layout-side-nav-bar-font-hover-color': 'rgb(255, 255, 255)',
    'menu-background-color': 'rgb(14, 14, 14)',
    'menu-border': '1px solid rgba(48, 48, 48, 1)',
    'menu-border-radius': radius.md,
    'menu-box-shadow': '0 2px 4px rgb(0 0 0 / 20%)',
    'menu-divider-border-top': '1px solid rgba(60, 60, 60, 0.5)',
    'menu-divider-margin': 0,
    'menu-item-background-color': 'transparent',
    'menu-item-font-color': 'rgb(250, 250, 250)',
    'menu-item-font-size': fontSize.md,
    'menu-item-font-weight': fontWeight.md,
    'menu-item-hover-background-color': 'rgb(32, 32, 32)',
    'menu-item-hover-font-color': 'rgb(230, 230, 230)',
    'menu-item-padding': `${gap.sm} ${gap.sm}`,
    'menu-padding': gap.xs,
    'modal-background-color': 'rgb(12, 12, 12)',
    'modal-border': '1px solid rgba(48, 48, 48, 1)',
    'modal-border-radius': radius.lg,
    'modal-font-color': 'rgb(230, 230, 230)',
    'modal-font-size': fontSize.md,
    'modal-font-weight': fontWeight.md,
    'modal-padding': gap.md,
    'modal-title-font-size': titleFontSize.md,
    'modal-title-font-weight': fontWeight.xl,
    'paper-background-color': 'rgba(50, 50, 50, 0.3)',
    'paper-border-radius': radius.md,
    'paper-padding': gap.sm,
    'scroll-bar-size': '6px',
    'scroll-bar-thumb-active-background-color': 'rgba(180, 180, 180, 1)',
    'scroll-bar-thumb-background-color': 'rgba(60, 60, 60, 0.8)',
    'scroll-bar-thumb-border-radius': 0,
    'scroll-bar-thumb-hover-background-color': 'rgba(180, 180, 180, 0.5)',
    'scroll-bar-track-active-background-color': 'rgba(0, 0, 0, 0)',
    'scroll-bar-track-background-color': 'rgba(0, 0, 0, 0)',
    'scroll-bar-track-border-radius': 0,
    'scroll-bar-track-hover-background-color': 'rgba(0, 0, 0, 0)',
    'skeleton-animation-duration': '1.5s',
    'skeleton-background-color': 'rgba(33, 33, 33)',
    'skeleton-border-radius': radius.md,
    'skeleton-highlight-color': 'rgba(56, 56, 56)',
    'switch-background-color': 'rgba(255, 255, 255, 1)',
    'switch-border-radius': '9999px',
    'switch-checked-background-color': 'var(--global-primary-color)',
    'switch-checked-border': '1px solid rgba(0, 0, 0, 0)',
    'switch-checked-thumb-background-color': 'rgba(0, 0, 0, 0)',
    'switch-checked-thumb-border': '1px solid rgba(0, 0, 0, 0)',
    'switch-thumb-background-color': 'rgba(0, 0, 0, 1)',
    'switch-thumb-border-color': '1px solid rgba(0, 0, 0, 0)',
    'switch-thumb-border-radius': '9999px',
    'table-border-color': primaryColor,
    'table-cell-border-color': primaryColor,
    'table-group-background-color': 'rgba(0, 0, 0, 0.8)',
    'table-group-font-color': 'rgb(230, 230, 230)',
    'table-header-background-color': 'rgb(22, 22, 22)',
    'table-header-font-color': 'rgb(230, 230, 230)',
    'table-row-background-color': 'transparent',
    'table-row-border-color': 'rgba(30, 30, 30, 0.5)',
    'table-row-config-comfortable-height': '60px',
    'table-row-config-condensed-height': '30px',
    'table-row-config-normal-height': '50px',
    'table-row-font-color': 'rgb(230, 230, 230)',
    'table-row-hover-background-color': 'rgba(100, 100, 100, 0.1)',
    'table-row-hover-border-color': primaryColor,
    'table-row-hover-font-color': 'rgb(230, 230, 230)',
    'table-row-selected-background-color': 'rgba(60, 60, 60, 0.3)',
    'table-row-selected-border-color': 'transparent',
    'table-row-selected-font-color': 'rgb(255, 255, 255)',
    'tooltip-background-color': 'rgb(30, 30, 30)',
    'tooltip-border': '1px solid var(--layout-border-color)',
    'tooltip-border-radius': radius.sm,
    'tooltip-box-shadow': '0 2px 4px rgb(0 0 0 / 20%)',
    'tooltip-font-color': 'rgb(230, 230, 230)',
    'tooltip-font-size': fontSize.md,
    'tooltip-font-weight': fontWeight.md,
    'tooltip-padding': `${gap.xs} ${gap.sm}`,
};

export const baseThemeComponents: AppThemeConfiguration['components'] = {
    'player-progress': {
        'handle-active-background-color': 'rgb(230, 230, 230)',
        'handle-background-color': 'rgb(230, 230, 230)',
        'handle-border-radius': radius.md,
        'handle-height': '10px',
        'handle-hover-background-color': 'rgb(230, 230, 230)',
        'handle-width': '10px',
        'track-active-background-color': 'rgb(230, 230, 230)',
        'track-background-color': 'rgb(230, 230, 230)',
        'track-height': '10px',
        'track-max-width': '100%',
        'track-width': '100%',
    },
    'side-nav-item': {
        'active-background-color': primaryColor,
        'active-font-color': 'var(--global-font-color)',
        'background-color': 'transparent',
        'background-hover-color': 'rgba(128, 128, 128, 0.1)',
        'border-radius': radius.md,
        'font-color': 'var(--global-font-color)',
        'font-hover-color': 'var(--global-font-color)',
        padding: `${gap.sm} ${gap.sm}`,
    },
};
