import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlocksFlashcardBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_flashcard_blocks';
  info: {
    displayName: 'Flashcard Block';
  };
  attributes: {
    flashcards: Schema.Attribute.Component<'learning.flashcards', true>;
  };
}

export interface ContentBlocksGsapAnimationCard extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_gsap_animation_cards';
  info: {
    displayName: 'Gsap Animation Block';
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.gsap-animation-card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ContentBlocksInfoCardBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_info_card_blocks';
  info: {
    displayName: 'Info Card Block';
  };
  attributes: {
    cards: Schema.Attribute.Component<'content.info-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface ContentBlocksScrollAnimationBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_scroll_animation_blocks';
  info: {
    displayName: 'Scroll Animation Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    scroll: Schema.Attribute.Component<'learning.scroll-animation-item', true>;
  };
}

export interface ContentBlocksSideBySideBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_side_by_side_blocks';
  info: {
    displayName: 'Side By Side Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'content.side-by-side-content', true>;
  };
}

export interface ContentBlocksStackingBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_stacking_blocks';
  info: {
    displayName: 'StackingBlock';
  };
  attributes: {
    cardHeight: Schema.Attribute.Integer;
    heading: Schema.Attribute.String;
    stacks: Schema.Attribute.Component<'content.stacking-card', true>;
  };
}

export interface ContentBlocksTabContentItem extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_tab_content_items';
  info: {
    displayName: 'Tab Content Item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'content.tab-content-item', true>;
  };
}

export interface ContentBlocksVideoContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_video_content_blocks';
  info: {
    displayName: 'Video Content Block';
  };
  attributes: {
    videos: Schema.Attribute.Component<'content.video-item', true>;
  };
}

export interface ContentGsapAnimationCard extends Struct.ComponentSchema {
  collectionName: 'components_content_gsap_animation_cards';
  info: {
    displayName: 'Gsap Animation Card';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    excerpt: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContentInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_content_info_cards';
  info: {
    displayName: 'Info Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentSideBySideContent extends Struct.ComponentSchema {
  collectionName: 'components_content_side_by_side_contents';
  info: {
    displayName: 'side-by-side-content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentStackingCard extends Struct.ComponentSchema {
  collectionName: 'components_content_stacking_cards';
  info: {
    displayName: 'StackingCard';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ContentTabContentItem extends Struct.ComponentSchema {
  collectionName: 'components_content_tab_content_items';
  info: {
    displayName: 'TabContentItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    thumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContentVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_content_video_items';
  info: {
    displayName: 'VideoItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    videoFile: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoUrl: Schema.Attribute.String;
  };
}

export interface LearningFlashcards extends Struct.ComponentSchema {
  collectionName: 'components_learning_flashcards';
  info: {
    displayName: 'Flashcard';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    backgroundColor: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    question: Schema.Attribute.String;
  };
}

export interface LearningScrollAnimationItem extends Struct.ComponentSchema {
  collectionName: 'components_learning_scroll_animation_items';
  info: {
    displayName: 'scroll-animation-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-blocks.flashcard-block': ContentBlocksFlashcardBlock;
      'content-blocks.gsap-animation-card': ContentBlocksGsapAnimationCard;
      'content-blocks.info-card-block': ContentBlocksInfoCardBlock;
      'content-blocks.scroll-animation-block': ContentBlocksScrollAnimationBlock;
      'content-blocks.side-by-side-block': ContentBlocksSideBySideBlock;
      'content-blocks.stacking-block': ContentBlocksStackingBlock;
      'content-blocks.tab-content-item': ContentBlocksTabContentItem;
      'content-blocks.video-content-block': ContentBlocksVideoContentBlock;
      'content.gsap-animation-card': ContentGsapAnimationCard;
      'content.info-card': ContentInfoCard;
      'content.side-by-side-content': ContentSideBySideContent;
      'content.stacking-card': ContentStackingCard;
      'content.tab-content-item': ContentTabContentItem;
      'content.video-item': ContentVideoItem;
      'learning.flashcards': LearningFlashcards;
      'learning.scroll-animation-item': LearningScrollAnimationItem;
    }
  }
}
