"use client";
import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, toast } from "@heroui/react";
import Link from "next/link";
import SocialLogin from "../ui/SocialLogin";

export default function SignInModal() {
  const handleSignIn = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const {data, error} = await authClient.signIn.email({
      email: userData.email,
      password: userData.password
    })
    if(error){
      console.log(error)
      toast.danger(error.message);
    }if(data){
      console.log(`logdin successfully`,data)
      toast.success("login successfull")
    }
  }
  return (
    <Modal>
      <Button variant="secondary" className={`bg-black text-white`}>
        Sign in
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90 min-w-50 lg:min-w-[100]">
            <form onSubmit={handleSignIn}>
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="px-3 text-[20px] font-bold">Welcome to Dragon news Sign In</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <div className="flex w-full px-3 flex-col gap-4 py-5">
              
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
                    placeholder="Enter password"
                    type="password"
                    name="password"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="flex flex-col">
              <Button type="submit" className="w-full">
                sign in
              </Button>
              <p>{"I don't hove any account"} <Link href={"/sign-in"} className="font-bold hover:underline text-blue-500">sign up</Link></p>
            </Modal.Footer>
            </form>
              <SocialLogin />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
