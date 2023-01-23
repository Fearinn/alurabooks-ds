import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbQuantity } from '../src';

export default {
  title: 'Components/AbQuantity',
  component: AbQuantity,
} as ComponentMeta<typeof AbQuantity>;

const Template: ComponentStory<typeof AbQuantity> = () => <AbQuantity />;

export const Default = Template.bind({})
