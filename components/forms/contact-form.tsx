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
import { useTranslation } from "@/hooks/useTranslation";

export function ContactForm() {
  const { t } = useTranslation();
  const [formspreeState, handleSubmitFormspree] = useFormspree('xqaqoygp');
  const { openModal } = useModalStore();

const formSchema = z.object({
  name: z.string().min(3, {
    message: t('contact.validation.name_min'),
  }),
  email: z.string().email(t('contact.validation.email_invalid')),
  message: z.string().min(10, {
    message: t('contact.validation.message_min'),
  }),
});

  const form = useHookForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Función para resetear el formulario cuando el modal se cierra
  const { isOpen } = useModalStore();
  
  useEffect(() => {
    if (!isOpen) {
      form.reset({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [isOpen, form]);

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
                <FormLabel className="text-foreground">{t('contact.name')}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={t('contact.name_placeholder')} 
                    {...field} 
                    className="bg-black/20 dark:bg-black/40 backdrop-blur-sm border border-white/20 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
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
                <FormLabel className="text-foreground">{t('contact.email')}</FormLabel>
                <FormControl>
                  <Input 
                    placeholder={t('contact.email_placeholder')} 
                    type="email" 
                    {...field} 
                    className="bg-black/20 dark:bg-black/40 backdrop-blur-sm border border-white/20 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
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
                <FormLabel className="text-foreground">{t('contact.message')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('contact.message_placeholder')}
                    className="resize-y w-full h-[100px] min-h-[100px] max-h-[400px] bg-black/20 dark:bg-black/40 backdrop-blur-sm border border-white/20 text-foreground placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
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
            {formspreeState.submitting ? t('contact.sending') : t('contact.send')}
          </Button>
        </form>
      </Form>

      <SuccessModal />
    </>
  );
}