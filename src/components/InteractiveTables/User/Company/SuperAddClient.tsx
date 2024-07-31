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
import { createPost } from '@/services/api/APIs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiLoaderCircle } from 'react-icons/bi';
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
  phone: z.string().regex(/^\d{10}$/, {
    message: 'Please enter a valid phone number with exactly 10 digits.',
  }),
});

const SuperAddClient = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await createPost('client/register', values);
      if (res.status === 200) {
        toast.success(res.data.message || 'Successfully created !');
      }
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
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
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="9800501332" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="mt-5 px-5 w-[140px]"
              disabled={loading}
            >
              {loading ? (
                <div className="flex gap-1 items-center w-fit mx-auto">
                  <BiLoaderCircle
                    className="animate-spin w-fit mx-auto"
                    size={24}
                  />
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SuperAddClient;
