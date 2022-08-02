/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	RichText,
	useBlockProps,
	__experimentalGetElementClassName,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { align, citation } = attributes;

	const className = classNames( {
		[ `has-text-align-${ align }` ]: align,
	} );

	return (
		<blockquote { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
			{ ! RichText.isEmpty( citation ) && (
				<RichText.Content
					tagName="cite"
					value={ citation }
					className={ classNames(
						'wp-block-quote__citation',
						__experimentalGetElementClassName( 'cite' )
					) }
				/>
			) }
		</blockquote>
	);
}
