import type { Schema, Attribute } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentCardsContentCards extends Schema.Component {
  collectionName: 'components_content_cards_content_cards';
  info: {
    displayName: 'Content Cards';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    cards: Attribute.Component<'card.card', true>;
  };
}

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface HeroBannerHeroBanner extends Schema.Component {
  collectionName: 'components_hero_banner_hero_banners';
  info: {
    displayName: 'Hero Banner';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subtitle: Attribute.String;
    cta: Attribute.Component<'cta.cta'>;
    mobileImage: Attribute.Media<'images'>;
    darkText: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
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
    description: '';
  };
  attributes: {
    rte: Attribute.RichText;
    width: Attribute.Enumeration<['Center', 'Boxed', 'FullWidth']> &
      Attribute.Required &
      Attribute.DefaultTo<'Boxed'>;
  };
}

export interface TextWithCtaTextWithCta extends Schema.Component {
  collectionName: 'components_text_with_cta_text_with_ctas';
  info: {
    displayName: 'Text with CTA';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    cta: Attribute.Component<'cta.cta'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'content-cards.content-cards': ContentCardsContentCards;
      'cta.cta': CtaCta;
      'hero-banner.hero-banner': HeroBannerHeroBanner;
      'navlink.nav-link': NavlinkNavLink;
      'sections.section': SectionsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social.social-footer': SocialSocialFooter;
      'socials.social': SocialsSocial;
      'sub-header.sub-header': SubHeaderSubHeader;
      'text-content.text-content': TextContentTextContent;
      'text-with-cta.text-with-cta': TextWithCtaTextWithCta;
    }
  }
}
