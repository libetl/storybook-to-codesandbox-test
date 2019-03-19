import "../StorybookIcon.stories.js";
import addons from "@storybook/addons";
import Events from "@storybook/core-events";
import { toId } from "@storybook/router/utils";
import { forceReRender, addDecorator } from "@storybook/react";
import React from "react";
import {
  Global,
  ThemeProvider,
  themes,
  createReset,
  convert
} from "@storybook/theming";

addDecorator(storyFn => (
  <ThemeProvider theme={convert(themes.light)}>
    <Global styles={createReset} />
    {storyFn()}
  </ThemeProvider>
));

addons.getChannel().emit(Events.SET_CURRENT_STORY, {
  storyId: toId("Basics|Brand/StorybookIcon", "default")
});
forceReRender();
