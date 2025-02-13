import { Form, Input, Button, Typography } from "antd";
import { login } from "../../api/auth.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useAppStore from "../../store/useAppStore";

export interface LoginFormValues {
  email: string;
  password: string;
}

const { Title } = Typography;

export default function Login() {
  const { updateUser } = useAppStore();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: LoginFormValues) => {
    try {
      const response = await login({
        username: values.email,
        password: values.password,
      });

      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        updateUser(response.data.user);
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed " + error);
      form.setFields([
        {
          name: "password",
          value: "",
        },
      ]);
    }
  };

  return (
    <div className='w-full max-w-md p-8 space-y-8 bg-gray-300 rounded-lg shadow-xl'>
      <Title
        level={2}
        className='text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'
      >
        Login
      </Title>
      <Form
        form={form}
        name='login'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout='vertical'
        className='space-y-6'
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: "Please input your email!" }]}
          className='!text-gray-300'
        >
          <Input
            autoFocus
            className='w-full px-4 py-2 !text-gray-800 !bg-gray-200 border !border-gray-100 rounded-md !focus:outline-none !focus:border-blue-500'
          />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
          className='!text-gray-300'
        >
          <Input.Password className='w-full px-4 py-2 !text-gray-800 !bg-gray-200 border !border-gray-100 rounded-md !focus:outline-none !focus:border-blue-500' />
        </Form.Item>

        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700'
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
