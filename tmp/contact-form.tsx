"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useHookForm } from "react-hook-form";
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
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { useEffect, useCallback } from "react";
import { useModalStore } from "@/store/use-modal-store";
import { SuccessModal } from "@/components/modals/success-modal";

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
  const [formspreeState, handleSubmitFormspree] = useFormspree('xqaqoygp');
  const { isOpen, openModal, closeModal } = useModalStore();

  const form = useHookForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Función para resetear el formulario
  const resetForm = useCallback(() => {
    form.reset({
      name: "",
      email: "",
      message: "",
    });
  }, [form]);

  // Función personalizada para cerrar el modal
  const handleCloseModal = useCallback(() => {
    console.log('handleCloseModal llamado'); // Debug log
    closeModal();
    // Resetear el formulario después de cerrar
    setTimeout(() => {
      resetForm();
      console.log('Formulario reseteado'); // Debug log
    }, 150);
  }, [closeModal, resetForm]);

  // Auto-cierre de emergencia después de 10 segundos
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        console.log('Auto-cerrando modal por timeout');
        handleCloseModal();
      }, 10000); // 10 segundos
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOpen, handleCloseModal]);

  // Efecto para manejar el éxito del envío
  useEffect(() => {
    if (formspreeState.succeeded) {
      console.log('Formulario enviado exitosamente, abriendo modal...'); // Debug log
      openModal();
    }
  }, [formspreeState.succeeded, openModal]);

  // Efecto para limpiar errores de Formspree cuando el formulario cambia
  useEffect(() => {
    if (formspreeState.errors && Object.keys(form.formState.dirtyFields).length > 0) {
      // Si hay errores de Formspree pero el usuario está modificando el formulario,
      // podríamos limpiar los errores de Formspree aquí si es necesario
    }
  }, [form.formState.dirtyFields, formspreeState.errors]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('_replyto', values.email);
      formData.append('message', values.message);
      await handleSubmitFormspree(formData);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí podrías manejar errores específicos si es necesario
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Nombre</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Ingresa tu nombre" 
                    {...field} 
                    className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  />
                </FormControl>
                <ValidationError 
                  field="name" 
                  errors={formspreeState.errors} 
                  className="text-red-500 text-xs mt-1" 
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Correo electrónico</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Ingresa tu correo electrónico" 
                    type="email" 
                    {...field} 
                    className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  />
                </FormControl>
                <ValidationError 
                  field="email" 
                  errors={formspreeState.errors} 
                  className="text-red-500 text-xs mt-1" 
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu mensaje aquí"
                    className="resize-none min-h-[150px] bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                    {...field}
                  />
                </FormControl>
                <ValidationError 
                  field="message" 
                  errors={formspreeState.errors} 
                  className="text-red-500 text-xs mt-1" 
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            disabled={formspreeState.submitting}
          >
            {formspreeState.submitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>

      <SuccessModal />
      
      {/* Botón de emergencia para cerrar modal (solo visible si está abierto) */}
      {isOpen && (
        <div className="fixed top-4 right-4 z-[60]">
          <button
            onClick={handleCloseModal}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium"
            title="Cerrar modal (emergencia)"
          >
            ✕ Cerrar
          </button>
        </div>
      )}
    </>
  );
}