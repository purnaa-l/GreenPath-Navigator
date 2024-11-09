import { useForm } from "react-hook-form";
import { z } from "zod";

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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PointSchema = z.object({
  points: z.number(),
});

type PointSchema = z.infer<typeof PointSchema>;

export function ProfileForm() {
  const form = useForm<PointSchema>({ defaultValues: { points: 0 } });

  const onSubmit = (values: PointSchema) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger>Award Points</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Award Sustainable Points to user</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="points"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Points</FormLabel>
                  <FormControl>
                    <Input placeholder="points" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
