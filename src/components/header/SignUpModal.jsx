"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, toast } from "@heroui/react";
import Link from "next/link";

export default function SignUpModal() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Userdata = Object.fromEntries(formData.entries());
    console.log(Userdata)
    const {data, error} = await authClient.signUp.email({
      name: Userdata.name,
      email: Userdata.email,
      password: Userdata.password
    })
    if(error){
      console.log( error)
      toast.danger(`faild to registerd ${error.message}`)
    }
    if(data){
      console.log("register successfull ", data)
      toast.success("registerd successfully")
    }
  };
  return (
    <Modal>
      <Button variant="secondary" className={`bg-black text-white`}>
        Sign up
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <form onSubmit={handleSubmit}>
            <Modal.Dialog className="sm:max-w-[360px] min-w-[400px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <Rocket className="size-5" />
                </Modal.Icon>
                <Modal.Heading className="px-3 text-[20px] font-bold">
                  Welcome to Dragon news
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <div className="flex w-full px-3 flex-col gap-4 py-5">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="input-type-number">Name</Label>
                    <Input
                      id="input-type-number"
                      min={0}
                      placeholder="Enter your Name"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="input-type-email">Email</Label>
                    <Input
                      id="input-type-email"
                      placeholder="jane@example.com"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="input-type-password">Password</Label>
                    <Input
                      id="input-type-password"
                      placeholder="••••••••"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className="flex flex-col">
                <Button type="submit" className="w-full">
                  sign up
                </Button>
                <p>
                  I have an acount{" "}
                  <Link
                    href={"/sign-in"}
                    className="font-bold hover:underline text-blue-500"
                  >
                    sign in
                  </Link>
                </p>
              </Modal.Footer>
            </Modal.Dialog>
          </form>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
