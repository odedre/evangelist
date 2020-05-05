import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { text } from '@bit/bit.base-ui.layout.align';
import { MutedText, mutedText } from '@bit/bit.base-ui.text.muted-text';

import { H2 } from '../../../elements/heading';

import styles from './powering-enterprise.module.scss';

export const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		className={classNames(
			props.className,
			text.center,
			text.l.left,
			styles.poweringEnterprise
		)}
	>
		<CrunchTheNumbers />

		<div className={styles.separator}></div>

		<div className={textColumn}>
			<H2 size={PossibleSizes.sm}>Powering application delivery at scale</H2>
			<Paragraph size={PossibleSizes.xl} className={mutedText}>
				Bit enterprise lets you build and ship modern web applications at scale. It
				empowers global teams to build faster and better with components.
			</Paragraph>
		</div>
	</div>
);

function CrunchTheNumbers() {
	return (
		<div className={classNames(text.center, styles.crunchTheNumbers)}>
			<div>
				<div
					style={{
						fontSize: '60px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					35%
				</div>
				<MutedText>Cost Reduction</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.secondary, themedText)}
					style={{
						fontSize: '60px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					10x
				</div>
				<MutedText>Feature delivery</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.primary, themedText)}
					style={{
						fontSize: '60px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					30x
				</div>
				<MutedText>Team Releases</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.complementary, themedText)}
					style={{
						fontSize: '80px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					∞
				</div>
				<MutedText>Scale</MutedText>
			</div>
		</div>
	);
}
