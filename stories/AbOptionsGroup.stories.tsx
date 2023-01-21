import React from 'react';
import { AbOptionsGroup } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IAbOptionsGroup } from '../src/interfaces/Option';
// import IOptionsGroup from '../src/interfaces/OptionsGroup';

export default {
  title: 'Components/AbOptionsGroup',
  component: AbOptionsGroup,
} as ComponentMeta<typeof AbOptionsGroup>;

const Template: ComponentStory<typeof AbOptionsGroup> = (
  args: IAbOptionsGroup
) => <AbOptionsGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: [
    { identificator: 1, title: 'e-book', price: 0, formats: '.pfd .epub .mob' },
    {
      identificator: 2,
      title: 'impresso',
      price: 0,
      formats: '.pfd .epub .mob',
    },
  ],
  defaultOption: {
    identificator: 1,
    title: 'e-book',
    price: 0,
    formats: '.pfd .epub .mob',
  },
} as IAbOptionsGroup;
