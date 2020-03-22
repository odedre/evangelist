import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './component-advantages.module.scss';

import { PossibleSizes } from '../../constants/sizes';
import { Image } from '../../components/concrete/image';
import { Paragraph } from '../../components/base/paragraph';

import { H3 } from '../../components/concrete/heading';

import { text, alignItems } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';

// import styles from './devSection.module.scss';
import { fourWayGrid } from '../../components/layout/grid-presets/four-way-grid';

export function ComponentsAdvantages(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className)}
			data-bit-id="bit.evangelist/sections/component-advantages"
		>
			<Grid
				colMd={12}
				className={classNames(
					text.center,
					text.sm.left,
					fourWayGrid,
					alignItems.center
				)}
			>
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Dynamic component workspace</H3>
					<Paragraph>
						Get a modular workspace where you can dynamically develop, add and
						remove components to compose your apps.
					</Paragraph>
				</div>
				<Image
					alt="editor with component"
					src="homepage-bit/editor-logo-comp.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Smart per-component versioning</H3>
					<Paragraph>
						Enjoy simple yet scalable semantic versioning per component, with smart
						automatic dependency definitions and management.
					</Paragraph>
				</div>
				<Image
					alt="smart versioning"
					src="homepage-bit/example-008.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Reusable dev environments</H3>
					<Paragraph>
						Apply pre-made reusable environments to develop, build, test and render
						each component in full isolation. Best practices included.
					</Paragraph>
				</div>
				<Image
					alt="dev tools integrations"
					src="homepage-bit/devtools.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Goodbye configuration files</H3>
					<Paragraph>
						Say goodbye to painful config files, and let Bit handle them for you.
						Want control? Use overrides to quickly apply changes across many
						components.
					</Paragraph>
				</div>
				<Image
					alt="goodbye conf files"
					src="homepage-bit/goodbye-configuration-files.png"
					className={styles.img}
					fullWidth
				/>
			</Grid>
		</div>
	);
}
