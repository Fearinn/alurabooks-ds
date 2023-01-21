import React from 'react';
import { AbInput } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IAbInput from '../src/interfaces/Input';

export default {
  title: 'Components/AbInput',
  component: AbInput,
} as ComponentMeta<typeof AbInput>;

const Template: ComponentStory<typeof AbInput> = (args: IAbInput) => (
  <AbInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  id: "default_input",
  label: "Default",
  placeholder: "This is a placeholder"
} as IAbInput;
