import React from 'react';
import classNames from 'classnames';
import styles from './eva-button.module.scss';
import BaseButton, { ButtonProps as BaseProps } from '@bit/bit.gui.base.button';
import elevations from './elevations.module.scss';

/**
 * Button component
 */
export type ButtonProps = {
	/**
	 * to control the shadow effect of a button.
	 */
	elevation?: 'none' | 'low' | 'medium' | 'high';
	importance: 'normal' | 'cta';
} & BaseProps;

export function EvaButton({
	className,
	importance = 'normal',
	elevation = 'none',
	...rest
}: ButtonProps) {
	return (
		<BaseButton
			className={classNames(styles.evaButton, elevations[elevation], className)}
			data-bit-id="concrete/eva-button"
			data-variation={importance}
			{...rest}
		></BaseButton>
	);
}

EvaButton.defaultProps = {
	elevation: 'low',
	importance: 'normal',
};