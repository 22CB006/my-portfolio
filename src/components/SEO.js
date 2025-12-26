import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../data/config';

const SEO = ({ 
  title, 
  description, 
  type = 'website',
  image,
  url,
  article = false,
  structuredData
}) => {
  // Construct full title
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} - ${siteConfig.title}`;

  // Use provided description or default from config
  const metaDescription = description || siteConfig.seo.description;

  // Use provided image or default from config
  const metaImage = image || siteConfig.seo.ogImage;

  // Construct full URL
  const fullUrl = url || window.location.href;

  // Default structured data for Person
  const defaultPersonData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.name,
    "jobTitle": siteConfig.title,
    "description": siteConfig.seo.description,
    "url": window.location.origin,
    "sameAs": [
      siteConfig.contact.linkedin,
      siteConfig.contact.github
    ],
    "email": siteConfig.contact.email,
    "telephone": siteConfig.contact.phone
  };

  // Default structured data for WebSite
  const defaultWebSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${siteConfig.name} Portfolio`,
    "description": siteConfig.seo.description,
    "url": window.location.origin,
    "author": {
      "@type": "Person",
      "name": siteConfig.name
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:creator" content={siteConfig.name} />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="og:type" content="article" />
          <meta property="article:author" content={siteConfig.name} />
        </>
      )}

      {/* Structured Data - Person */}
      <script type="application/ld+json">
        {JSON.stringify(defaultPersonData)}
      </script>

      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify(defaultWebSiteData)}
      </script>

      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
