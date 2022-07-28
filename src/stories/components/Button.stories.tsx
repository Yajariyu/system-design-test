import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {  PrimaryButton as Button } from '../../components/Button';

export default {
  title: 'atoms/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  disabled: false
};