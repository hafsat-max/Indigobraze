import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, TextInput } from "@mantine/core";
import * as Yup from "yup";
import { useForm, yupResolver } from "@mantine/form";

const schema = Yup.object().shape({
  name: Yup.string().min(2, "Name should have at least 2 letters"),
  email: Yup.string().email("Invalid email"),
});

export function SignUp() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        centered
        onClose={close}
        closeOnClickOutside={false}
        title="Register"
      >
        <form
          className=" flex flex-col gap-3"
          id="myForm"
          action="https://formspree.io/f/xoqgbenp"
          method="POST"
        >
          <TextInput
            withAsterisk
            label="Email"
            placeholder="example@mail.com"
            type="email"
            name="email"
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label="Name"
            placeholder="John Doe"
            mt="sm"
            {...form.getInputProps("name")}
          />
          <Button
            type="submit"
            variant="primary"
            classNames={{ root: "bg-[#000080] text-white" }}
          >
            Submit
          </Button>
        </form>
      </Modal>

      <button
        onClick={open}
        className="bg-primary text-white py-3 px-8 mt-3 rounded-lg leading-[140%] over:bg-secondary self-center"
      >
        Sign Up
      </button>
    </>
  );
}
