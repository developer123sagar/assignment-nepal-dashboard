import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { addWatcher } from '@/services/api/APIs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

const SuperAddWatcher = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await addWatcher(values);
      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error('Someting went wrong');
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section>
      <div className="p-4 bg-white rounded-md shadow-md w-[70%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Sagar" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="chandsagar314@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-10 w-[150px]">
              <Button
                type="submit"
                className="inline-flex mt-7 w-full h-12 my-4 gap-1 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#15171C,45%,#F6F5F2,48%,#15171C)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-sm"
              >
                {isSubmitting ? (
                  <>
                    Submitting
                    <Loader size={20} className="animate-spin ml-2" />
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SuperAddWatcher;
