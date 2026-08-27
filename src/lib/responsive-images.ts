/**
 * Responsive image helpers — prefer compressed WebP for LCP and below-fold media.
 */

export interface ResponsiveWidth {
	src: string;
	width: number;
}

/** Build a srcset string from width-tagged image paths. */
export function buildSrcSet(widths: ResponsiveWidth[]): string {
	return widths.map(({ src, width }) => `${src} ${width}w`).join(', ');
}

/** Build srcset for content images that have -480w / -960w variants. */
export function contentSrcSet(baseSrc: string): string | undefined {
	const match = baseSrc.match(/^(.+\/)(.+)\.webp$/i);
	if (!match) return undefined;

	const [, dir, name] = match;
	if (
		name.endsWith('-640w') ||
		name.endsWith('-960w') ||
		name.endsWith('-1400w') ||
		name.endsWith('-1024w') ||
		name.endsWith('-1536w') ||
		name.endsWith('-1920w') ||
		name.endsWith('-2560w') ||
		name.endsWith('-3840w') ||
		name.endsWith('-480w')
	) {
		return undefined;
	}

	return buildSrcSet(
		contentWidths.map((width) => ({
			src: `${dir}${name}-${width}w.webp`,
			width,
		})),
	);
}

/**
 * Homepage / banner hero — HD WebP ladder up to 4K for retina and ultra-wide screens.
 * Native art ~1983×793 (~2.5:1).
 */
export const heroResponsive: ResponsiveWidth[] = [
	{ src: '/images/unturned-hacks-hero-640w.webp', width: 640 },
	{ src: '/images/unturned-hacks-hero-1024w.webp', width: 1024 },
	{ src: '/images/unturned-hacks-hero-1536w.webp', width: 1536 },
	{ src: '/images/unturned-hacks-hero-1920w.webp', width: 1920 },
	{ src: '/images/unturned-hacks-hero-2560w.webp', width: 2560 },
	{ src: '/images/unturned-hacks-hero-3840w.webp', width: 3840 },
];

export const heroDesktopResponsive: ResponsiveWidth[] = heroResponsive;

/** Default LCP src — 1920w HD WebP for sharp display on most desktops. */
export const heroSrc = '/images/unturned-hacks-hero-1920w.webp';
export const heroSrcSet = buildSrcSet(heroResponsive);
export const heroSizes = '100vw';

/** Preload the HD variant browsers pick on desktop. */
export const heroPreloadSrc = '/images/unturned-hacks-hero-1920w.webp';
export const heroMimeType = 'image/webp';

/** Native dimensions for layout / aspect ratio (1983×793 master). */
export const heroWidth = 1983;
export const heroHeight = 793;

/** Responsive widths for below-fold content images. */
export const contentWidths = [480, 960] as const;

export const galleryFeaturedSizes = '(max-width: 560px) 100vw, (max-width: 900px) 90vw, 640px';
export const galleryTileSizes = '(max-width: 560px) 100vw, (max-width: 900px) 45vw, 320px';
export const productMainSizes = '(max-width: 900px) 100vw, 640px';
export const productThumbSizes = '160px';
