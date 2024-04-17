"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().max(50),
  phone: z.string(),
  review: z.string().min(10).max(500),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      telefono: "",
      review: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:7000/api/resena", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);

    toast({
      title: "Éxito",
      description: "Se ha enviado tu mensaje de contacto correctamente.",
    });
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje.",
        variant: "destructive", 
      });
    }
  };

  return (
    <div id="contacto" className=" bg-gray-200 mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 py-4">
        Deja tu comentario
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <Form {...form} className="space-y-8">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone"
                      {...field}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Input
                      as="textarea"
                      placeholder="Review"
                      {...field}
                      className="textarea textarea-bordered h-24"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="btn btn-primary py-4 px-4"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Form>
        <div className="hidden md:block">
          <img
            src="logo.png"
            alt="Imagen decorativa"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
