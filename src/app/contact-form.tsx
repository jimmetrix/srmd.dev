"use client";

import { useFormState } from "react-dom";
import { 
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { submitContactForm } from "./contact-action";

const initialState = { message: "" };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)
  return (
    <section className="px-8 py-16">
      <div id="contact" className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          CONTACT ME
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
        {!!state.message && (
          <Typography variant="small" className="mt-4 text-green-600">
            {state.message}
          </Typography>
        )}
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and I will get back to you within 24
                hours.
              </Typography>
                <a
                href="https://wa.me/9647822522014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-5 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp h-6 w-6 text-white text-xl flex items-center justify-center" />
                  <Typography variant="h6" color="white" className="mb-2">
                    Message me on WhatsApp
                  </Typography>
                </a>
              <div className="flex my-2 gap-5">
                <a
                  href="mailto:jmtrx@proton.me"
                  className="flex my-2 gap-5 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <i className="fa-solid fa-envelope text-white text-xl flex items-center justify-center w-6 h-6" />
                  <Typography variant="h6" color="white" className="mb-2">
                    jmtrx@proton.me
                  </Typography>
                </a>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action={formAction}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    defaultChecked
                  />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Development" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Support" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Other" />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="first-name"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
