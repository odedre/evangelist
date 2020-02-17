import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

//@ts-ignore
import { CommentCarousel, carouselContent } from '@bit/bit.web.components.comment-carousel';
import { PossibleSizes } from '../../constants/sizes';
import { H2 } from '../../components/concrete/heading';
import styles from './carouselSection.module.scss';

export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.carouselSection, props.className)}>
			<H2 size={PossibleSizes.md} className={styles.heading}>
				Trusted by over 100,000 developers
			</H2>
			<div data-bit-id="commentCarousel">
				<CommentCarousel content={carouselContent} />
			</div>
		</div>
	);
}