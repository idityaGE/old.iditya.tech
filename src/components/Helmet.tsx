import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site.config';

const CustomHelmet = () => {
  return (
    <Helmet>
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords.join(", ")} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={siteConfig.siteUrl} />
      <meta property="og:image" content={siteConfig.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={siteConfig.links.x} />
      <meta property="twitter:title" content={siteConfig.title} />
      <meta property="twitter:description" content={siteConfig.description} />
      <meta property="twitter:image" content={siteConfig.ogImage} />
    </Helmet>
  )
}

export default CustomHelmet