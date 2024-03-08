import { Heading } from '@/components/common/Heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { DropdownSelect } from '@/components/common/DropdownSelect'
import { register } from 'module'
import { useCreateInstitutionMutation } from '@/app/services/institution'
import { useAppDispatch } from '@/app/hooks'
import { roles } from '@/app/constants'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumbs from '@/components/ui/breadcrumbs'


const formSchema = z.object({
  name: z.string(),
  code: z.string().length(3),
  description: z.string()
})

const CreateInstitution = () => {
  const dispatch = useAppDispatch()
  const [createInstitution, { isLoading }] = useCreateInstitutionMutation()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      code: "",
      description: ""
    },

  })
  // const { register: formRegister, handleSubmit } = useForm();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createInstitution({
      name: values.name,
      code: values.code,
      description: values.description,
      "website1": {
        "value": "string",
        "title": "string"
      },
      "website2": {
        "value": "string",
        "title": "string"
      },
      "website3": {
        "value": "string",
        "title": "string"
      },
      "email1": {
        "value": "string",
        "title": "string"
      },
      "email2": {
        "value": "string",
        "title": "string"
      },
      "email3": {
        "value": "string",
        "title": "string"
      },
      "phone1": {
        "value": "string",
        "title": "string"
      },
      "phone2": {
        "value": "string",
        "title": "string"
      },
      "phone3": {
        "value": "string",
        "title": "string"
      }
    }).then(() => {
      navigate('/admin/institutions')
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
        <Heading title='Create an institution' description='Add a new institution' />
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
                    <Input placeholder="Truong Dai hoc FPT" {...field} />
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
                    <Input placeholder="FPT" {...field} />
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
                    <Input placeholder="Mô tả trường Đại học" {...field} />
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

export default CreateInstitution
