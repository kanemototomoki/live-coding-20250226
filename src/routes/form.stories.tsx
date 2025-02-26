import type { Meta, StoryObj } from "@storybook/react";
import FormPage from "./form";
import { within, userEvent } from "@storybook/test";

const meta = {
  title: "Routes/FormPage",
  component: FormPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FormPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ValidationErrors: Story = {
  play: async ({ step, canvasElement }) => {
    const canvas = within(canvasElement);

    await step("ユーザー名を入力", async () => {
      const input = await canvas.findByLabelText("ユーザー名");
      await userEvent.type(input, "a");
      await userEvent.tab();
    });

    await step("メールアドレスを入力", async () => {
      const input = await canvas.findByLabelText("メールアドレス");
      await userEvent.type(input, "aaa@gmail.com");
      await userEvent.tab();
    });

    await step("ユーザー名が未入力の場合、バリデーションエラーが表示されること", async () => {
      const input = await canvas.findByLabelText("ユーザー名");

      await userEvent.clear(input);
      await userEvent.tab();

      // await expect(input).toHaveAccessibleErrorMessage("必須項目です");
    });
    await step("メールアドレスが未入力の場合、バリデーションエラーが表示されること", async () => {});
  },
};
