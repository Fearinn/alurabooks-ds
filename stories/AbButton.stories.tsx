import React from 'react';
import { AbButton } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IAbButton from '../src/interfaces/Button';

export default {
  title: 'Components/AbButton',
  component: AbButton,
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  text: "Primary",
  customType: "primary"
} as IAbButton

export const Secondary = Template.bind({})

Secondary.args = {
  text: "Secondary",
  customType: "secondary"
} as IAbButton
