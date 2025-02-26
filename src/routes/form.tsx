import { getInputProps, useForm } from "@conform-to/react";
import { z } from "zod";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

z.setErrorMap((error, ctx) => {
  if (
    (error.code === z.ZodIssueCode.invalid_type && ctx.defaultError === "Required") ||
    (error.code === z.ZodIssueCode.too_small && error.minimum === 1)
  ) {
    return { message: "必須項目です" };
  }
  return { message: ctx.defaultError };
});

const schema = z.object({
  username: z.string().min(1).max(50, { message: "ユーザー名は50文字以内で入力してください" }),
  email: z.string().min(1).email({ message: "正しいメールアドレスを入力してください" }),
});

export type FormSchema = z.infer<typeof schema>;

export const FormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, { username, email }] = useForm({
    shouldValidate: "onBlur",
    onSubmit: async (values) => {
      setIsSubmitting(true);
      console.log("values: ", values);

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("フォームが送信されました！");
      } catch (error) {
        toast.error("エラーが発生しました");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    constraint: getZodConstraint(schema),
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">フォーム</h1>
        <ToastContainer position="top-center" autoClose={false} />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.onSubmit(e);
          }}
          id={form.id}
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
          noValidate
          method="post"
        >
          <div>
            <label htmlFor={username.id} className="block text-sm font-medium text-gray-700 mb-1">
              ユーザー名
            </label>
            <Input
              {...getInputProps(username, { type: "text" })}
              placeholder="山田太郎"
              variant={username.errors ? "error" : "primary"}
            />
            {username.errors && <p className="mt-1 text-sm text-red-600">{username.errors[0]}</p>}
          </div>

          <div>
            <label htmlFor={email.id} className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス
            </label>
            <Input
              {...getInputProps(email, { type: "email" })}
              placeholder="example@example.com"
              variant={email.errors ? "error" : "primary"}
            />
            {email.errors && <p className="mt-1 text-sm text-red-600">{email.errors[0]}</p>}
          </div>
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="w-full"
            form={form.id}
            disabled={isSubmitting}
          >
            送信する
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
