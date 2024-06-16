import type { Schema, Attribute } from '@strapi/strapi';

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    type: Attribute.Enumeration<['Button', 'Link']>;
    Text: Attribute.String;
    Link: Attribute.String;
    NewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface HeroBannerHeroBanner extends Schema.Component {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    displayName: 'Hero Banner';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Attribute.String;
    Subtitle: Attribute.String;
    CTA: Attribute.Component<'cta.cta'>;
  };
}

export interface NavlinkNavLink extends Schema.Component {
  collectionName: 'components_navlink_nav_links';
  info: {
    displayName: 'NavLink';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface SectionsSection extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    navLinks: Attribute.Component<'navlink.nav-link', true>;
  };
}

export interface SocialSocialFooter extends Schema.Component {
  collectionName: 'components_social_social_footers';
  info: {
    displayName: 'Social footer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    socials: Attribute.Component<'socials.social', true> & Attribute.Required;
  };
}

export interface SocialsSocial extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<
      ['Facebook', 'LinkedIn', 'Instagram', 'YouTube']
    > &
      Attribute.Required;
  };
}

export interface SubHeaderSubHeader extends Schema.Component {
  collectionName: 'components_sub_header_sub_headers';
  info: {
    displayName: 'SubHeader';
  };
  attributes: {
    Text: Attribute.String;
    CTA: Attribute.Component<'cta.cta'>;
  };
}

export interface TextContentTextContent extends Schema.Component {
  collectionName: 'components_text_content_text_contents';
  info: {
    displayName: 'TextContent';
  };
  attributes: {
    rte: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cta.cta': CtaCta;
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'navlink.nav-link': NavlinkNavLink;
      'sections.section': SectionsSection;
      'social.social-footer': SocialSocialFooter;
      'socials.social': SocialsSocial;
      'sub-header.sub-header': SubHeaderSubHeader;
      'text-content.text-content': TextContentTextContent;
    }
  }
}
