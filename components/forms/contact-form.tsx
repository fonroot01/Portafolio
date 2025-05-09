"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres.",
  }),
  email: z.string().email("Por favor ingresa un correo válido."),
  message: z.string().min(10, {
    message: "Por favor escribe un mensaje más descriptivo.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      form.reset();

      if (response.status === 200) {
        storeModal.onOpen({
          title: "¡Gracias!",
          description:
            "¡Tu mensaje ha sido recibido! Agradezco tu contacto y te responderé pronto.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      console.log("Err!", err);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu nombre" {...field} />
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
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu correo electrónico" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe tu mensaje" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Red social (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Enlace a tu red social" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
