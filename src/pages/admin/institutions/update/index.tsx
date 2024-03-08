import { Heading } from '@/components/common/Heading'
import { Separator } from '@/components/ui/separator'
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import { useAppDispatch } from '@/app/hooks'
import { useGetInstitutionQuery, useUpdateInstitutionMutation } from '@/app/services/institution'
import Breadcrumbs from '@/components/ui/breadcrumbs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  name: z.string().min(1),
  code: z.string().length(3),
  description: z.string()
})

const UpdateInstitution = () => {
  const { id } = useParams()
  const [updateInstitution, { isLoading }] = useUpdateInstitutionMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data } = useGetInstitutionQuery(id ?? "")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (data) {
      form.setValue('name', data.name)
      form.setValue('code', data.code)
      form.setValue('description', data.description)
    }
  }, [data]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(id)
    await updateInstitution({
      id,
      body: {
        name: values.name,
        code: values.code,
        description: values.description
      }
    }).then(() => {
      navigate('/admin/users')
    })
  }
  return (
    <div className="flex flex-col py-4 gap-4">
      <Breadcrumbs
        parents={[
          {
            label: "Dashboard",
            url: "/admin"
          },
          {
            label: "Institutions",
            url: "/admin/institutions "
          },
        ]}
        currentPage="Create"
      />
      <div className="flex items-start justify-between">
        <Heading title='Update institution' description='Edit an institution infomation' />
      </div>
      <Separator />
      <div className='flex'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-1/2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution name" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution code" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Institution description" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default UpdateInstitution
