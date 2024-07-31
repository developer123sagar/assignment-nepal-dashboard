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
  Vat_no: z.string().regex(/^\d{6,}/, {
    message: 'Vat number must be atleast 6 digit',
  }),
  photo: z.instanceof(File, {
    message: 'Photo must be a file',
  }),
  document: z.instanceof(File, {
    message: 'Document must be a file',
  }),
});

const SuperAddEmployer = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      Vat_no: '',
      photo: undefined,
      document: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    const formData = new FormData();

    if (values.document && values.photo) {
      formData.append('photo', values.photo);
      formData.append('document', values.document);
    }
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('Vat_no', values.Vat_no);

    try {
      const res = await createPost('employer/register', formData);
      if (res.status === 200) {
        toast.success(res.data.message || 'Success');
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
                name="Vat_no"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Vat Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Photo
                    </FormLabel>
                    <FormControl>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-14 font-medium text-graydark">
                      Document
                    </FormLabel>
                    <FormControl>
                      <input
                        type="file"
                        onChange={(e) => field.onChange(e.target.files?.[0])}
                      />
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

export default SuperAddEmployer;
