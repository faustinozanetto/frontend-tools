import Head from 'next/head';
import React from 'react';

interface ILayoutHeadProps {
  /** SEO Title */
  title?: string;
  /** SEO Description */
  description?: string;
  /** SEO Image */
  image?: string;
  /** SEO Url */
  url?: string;
  /** SEO Canonical Url */
  canonicalUrl?: string;
}

const LayoutHead: React.FC<ILayoutHeadProps> = (props) => {
  const { title, description, image, url, canonicalUrl } = props;

  return (
    <Head>
      <title>{title}</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index" />
      <meta name="description" content={description} />

      <meta content="Frontend, Tools, Helper" name="keywords" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="canonical" href={canonicalUrl} />
      <meta content="#4f46e5" name="theme-color" />

      {/* Open graph */}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="452" />
      <meta property="og:image:height" content="175" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Frontend Tools" />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@frontendtools" />
    </Head>
  );
};

export default LayoutHead;
