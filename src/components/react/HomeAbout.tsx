import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const featureGroups = [
	{
		key: 'esp',
		titleKey: 'home.aboutEspTitle',
		itemsKey: 'home.aboutEspItems',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
				<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
				<circle cx="12" cy="12" r="3" />
			</svg>
		),
	},
	{
		key: 'combat',
		titleKey: 'home.aboutCombatTitle',
		itemsKey: 'home.aboutCombatItems',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
				<circle cx="12" cy="12" r="10" />
				<circle cx="12" cy="12" r="3" />
				<path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
			</svg>
		),
	},
	{
		key: 'movement',
		titleKey: 'home.aboutMoveTitle',
		itemsKey: 'home.aboutMoveItems',
		icon: (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
				<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
			</svg>
		),
	},
] as const;

const quickLinks = [
	{ href: '/unturned-hacks/', labelKey: 'home.aboutPillar' },
	{ href: '/unturned-esp/', labelKey: 'home.aboutEsp' },
	{ href: '/unturned-aimbot/', labelKey: 'home.aboutAimbot' },
	{ href: '/features/', labelKey: 'home.aboutFeatures' },
] as const;

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<div className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title" className="home-about__title">
					{t('home.aboutTitleBefore')}
					<span className="home-about__title-accent">{t('home.aboutTitleAccent')}</span>
					{t('home.aboutTitleAfter')}
				</h2>
				<p className="home-about__intro">{t('home.aboutIntro')}</p>
			</div>

			<div className="home-about__grid">
				{featureGroups.map((group) => (
					<article key={group.key} className="home-about__card">
						<div className="home-about__card-icon">{group.icon}</div>
						<h3 className="home-about__card-title">{t(group.titleKey)}</h3>
						<ul className="home-about__card-list">
							{t(group.itemsKey)
								.split(',')
								.map((item) => item.trim())
								.filter(Boolean)
								.map((item) => (
									<li key={item}>{item}</li>
								))}
						</ul>
					</article>
				))}
			</div>

			<div className="home-about__footer">
				<div className="home-about__links">
					<p className="home-about__links-label">{t('home.aboutLinksTitle')}</p>
					<div className="home-about__links-row">
						{quickLinks.map((link) => (
							<a key={link.href} href={link.href} className="home-about__link">
								{t(link.labelKey)}
							</a>
						))}
					</div>
				</div>
				<div className="home-about__actions">
					<a href="/pricing/" className="home-about__cta home-about__cta--primary">
						{t('home.aboutStore')}
					</a>
					<a href="/updates/" className="home-about__cta home-about__cta--ghost">
						{t('home.aboutStatus')}
					</a>
				</div>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
