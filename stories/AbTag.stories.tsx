import React from 'react';
import { AbTag } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ITag from '../src/interfaces/Tag';

export default {
  title: 'Components/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = (args: ITag) => (
  <AbTag {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Primary',
} as ITag;
