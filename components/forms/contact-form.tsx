"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useHookForm } from "react-hook-form"; // Renombrado para evitar conflicto
import * as z from "zod";
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

// Importa el hook useForm de Formspree
import { useForm as useFormspree, ValidationError } from '@formspree/react'; // Renombrado para evitar conflicto
import { useEffect } from "react"; // Necesario para el useEffect

const formSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres.",
  }),
  email: z.string().email("Por favor ingresa un correo válido."),
  message: z.string().min(10, {
    message: "Por favor escribe un mensaje más descriptivo.",
  }),
});

export function ContactForm() {
  // Inicializa el hook de Formspree con tu Form ID
  const [formspreeState, handleSubmitFormspree] = useFormspree('xqaqoygp'); // TU ID DE FORMSPREE

  // Inicializa el hook de React Hook Form
  const form = useHookForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Usa useEffect para resetear el formulario de react-hook-form cuando Formspree tenga éxito
  useEffect(() => {
    if (formspreeState.succeeded) {
      form.reset();
      // Opcional: podrías mostrar una notificación toast o algo más sofisticado aquí
    }
  }, [formspreeState.succeeded, form]); // Asegúrate de incluir 'form' en las dependencias

  // Esta función se llamará cuando react-hook-form valide los datos
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Aquí es donde llamamos al manejador de envío de Formspree
    // Formspree esperará un objeto FormData, pero useFormspree.handleSubmit
    // puede recibir un evento de formulario o un objeto con los datos.
    // Como react-hook-form ya nos da los 'values' validados, podemos crear un FormData.

    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('_replyto', values.email); // Clave para el email del remitente
    formData.append('message', values.message);

    // Llama al manejador de envío de Formspree con los datos
    // Esto enviará los datos directamente a Formspree vía XHR/Fetch
    await handleSubmitFormspree(formData);

    // No necesitas más lógica aquí para el éxito, ya que formspreeState.succeeded lo manejará
  }

  // Si Formspree ya envió el formulario con éxito, muestra un mensaje de agradecimiento
  if (formspreeState.succeeded) {
    return (
      <div className="text-center text-green-600 font-semibold py-8">
        ¡Gracias por tu mensaje! Te responderé pronto.
      </div>
    );
  }

  return (
    <Form {...form}>
      {/* El onSubmit de la etiqueta form ahora llama a handleSubmit de react-hook-form.
          Este a su vez llamará a nuestra función onSubmit de arriba, que luego llamará a Formspree. */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa tu nombre" {...field} />
              </FormControl>
              {/* ValidationError de Formspree para errores de backend, además de FormMessage de RHF */}
              <ValidationError field="name" errors={formspreeState.errors} className="text-red-500 text-xs mt-1" />
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
                {/* Aquí es crucial pasar '_replyto' a Formspree, no 'email' */}
                {/* Aseguramos que el nombre del campo para Formspree sea '_replyto' */}
                <Input placeholder="Ingresa tu correo electrónico" {...field} name="_replyto" />
              </FormControl>
              <ValidationError field="email" errors={formspreeState.errors} className="text-red-500 text-xs mt-1" />
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
              <ValidationError field="message" errors={formspreeState.errors} className="text-red-500 text-xs mt-1" />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* El botón ahora usará el estado de Formspree para deshabilitarse */}
        <Button type="submit" disabled={formspreeState.submitting}>
          {formspreeState.submitting ? 'Enviando...' : 'Enviar'}
        </Button>
        {/* ValidationError para errores generales del formulario (no de campo específico) */}
        <ValidationError errors={formspreeState.errors} className="text-red-500 text-sm mt-2" />
      </form>
    </Form>
  );
}