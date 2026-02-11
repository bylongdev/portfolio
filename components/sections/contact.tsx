"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Field, FieldGroup, FieldSet } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Copy, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import footer_bg from "@/resources/imgs/city-landscape.png";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "../forms/contact-form";

function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="bg-background/0 relative overflow-hidden border-none shadow-none">
      <CardContent>
        <Card className="bg-background/0 relative overflow-hidden">
          <Image
            src={footer_bg}
            alt="Footer Background"
            className="absolute bottom-0 -z-10 object-cover object-top blur-[2px] md:-top-5"
          />
          <CardContent className="flex w-full flex-col-reverse justify-between gap-6 md:flex-row">
            <Card className="bg-background/85 flex flex-col gap-6 md:w-2/5">
              <CardContent className="flex grow flex-col gap-6">
                <div className="flex grow flex-col">
                  <div className="text-muted-foreground font-serif text-4xl tracking-wide">
                    Dream.
                  </div>
                  <div className="text-muted-foreground self-center font-serif text-4xl tracking-wide">
                    Code.
                  </div>
                  <div className="text-muted-foreground self-end font-serif text-4xl tracking-wide">
                    Build.
                  </div>
                </div>
                <Separator />
                <div className="flex grow flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <h3>bylong.dev@gmail.com</h3>
                    <Copy
                      size={18}
                      className="cursor-pointer hover:opacity-70"
                      onClick={() => {
                        navigator.clipboard.writeText("bylong.dev@gmail.com");
                      }}
                    />
                  </div>

                  <Link
                    href={"https://www.linkedin.com/in/bylongdev"}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="h-5 w-5"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                    <h3>linkedin.com/in/bylongdev</h3>
                  </Link>

                  <Link
                    href={"https://github.com/bylongdev"}
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <h3>github.com/bylongdev</h3>
                  </Link>
                </div>
              </CardContent>

              <CardFooter className="flex w-full justify-center opacity-75">
                <CardDescription className="w-fit font-semibold tracking-wide">
                  #bylong.dev
                </CardDescription>
              </CardFooter>
            </Card>

            <div>
              <Separator orientation="vertical" className="" />
            </div>

            {/* Contact Form */}
            <Card className="bg-background/85 grow">
              <CardContent className="grow">
                <form className="h-full" onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldSet className="h-full">
                    <FieldGroup className="h-full">
                      <FieldGroup className="flex h-full flex-row">
                        <Controller
                          name="fname"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id="fname"
                                type="text"
                                placeholder="First Name"
                              />
                            </Field>
                          )}
                        />
                        <Controller
                          name="lname"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                              <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                id="lname"
                                type="text"
                                placeholder="Last Name"
                              />
                            </Field>
                          )}
                        />
                      </FieldGroup>
                      <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <Input
                              {...field}
                              aria-invalid={fieldState.invalid}
                              id="email"
                              type="email"
                              placeholder="Email"
                            />
                          </Field>
                        )}
                      />
                      <Controller
                        name="message"
                        control={form.control}
                        render={({ field, fieldState }) => (
                          <Field className="grow">
                            <Textarea
                              id="message"
                              {...field}
                              aria-invalid={fieldState.invalid}
                              className="h-40 resize-none overflow-y-auto"
                              placeholder="Message"
                            />
                          </Field>
                        )}
                      />
                      <Field className="w-fit self-end">
                        <Button
                          type="submit"
                          size={"lg"}
                          className="rounded-sm p-4"
                        >
                          Send message
                        </Button>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </form>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default ContactSection;
