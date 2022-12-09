import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

import "../styles/ErrorPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return <>
		{/* Global Site Tag (gtag.js) - Google Analytics */}
		<Script
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
		/>
		<Script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4515639184646084"
			crossOrigin="anonymous"
		/>
		<Script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
		<script
			dangerouslySetInnerHTML={{
				__html: `
					(adsbygoogle = window.adsbygoogle || []).push({
						google_ad_client: "${gtag.GA_TRACKING_ID}",
						enable_page_level_ads: true,
						tag_partner: "site_kit"
					});

					console.log(adsbygoogle);
				`
			}}
		/>
		<Script
			id="gtag-init"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
			}}
		/>
		<Component {...pageProps} />
		<Script src='/serviceWorker.js'></Script>
	</>;
}

export default MyApp;
