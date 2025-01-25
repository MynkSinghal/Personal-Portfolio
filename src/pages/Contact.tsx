import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";
import { Github, Linkedin, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8 sm:space-y-12"
      >
        <section className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Get in Touch</h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </section>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/MynkSinghal" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/mynkkkk" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:singhal2004mayank@gmail.com">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>

        <Form {...form}>
          <form 
            action="https://formspree.io/f/manqnkda" 
            method="POST"
            className="space-y-4 sm:space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const isValid = await form.trigger();
              if (isValid) {
                try {
                  const formValues = form.getValues();
                  const response = await fetch("https://formspree.io/f/manqnkda", {
                    method: "POST",
                    body: JSON.stringify(formValues),
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                    }
                  });
                  if (response.ok) {
                    toast.success("Message sent successfully!");
                    form.reset();
                  } else {
                    toast.error("Failed to send message. Please try again.");
                  }
                } catch (error) {
                  toast.error("Failed to send message. Please try again.");
                }
              }
            }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                  <FormControl>
                    <Input 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      className="text-sm sm:text-base p-2 sm:p-3"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                  <FormControl>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="text-sm sm:text-base p-2 sm:p-3"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base p-2 sm:p-3"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs sm:text-sm" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-sm sm:text-base py-2 sm:py-3">
              Send Message
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}

export default Contact;