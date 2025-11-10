import z from 'zod'
import { Calendar22 } from './date-picker'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Minus, XIcon } from 'lucide-react'
import { Input } from './ui/input'
import React from 'react'
import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet
} from './ui/field'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput
} from './ui/input-group'

const studentsListSchema = z.object({
    studentList: z.array(z.object())
})

export function StudentsList() {
    const form = useForm<z.infer<typeof studentsListSchema>>({
        resolver: zodResolver(studentsListSchema),
        defaultValues: {
            studentList: []
        }
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'studentList'
    })

    function onSubmit(data: z.infer<typeof studentsListSchema>) {
        return console.log(data)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    Resumo da lista - {fields.length} Alunos
                    <Button type="button" onClick={() => form.reset()}>
                        Resetar
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form id="student-list" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet className="gap-4">
                        <FieldGroup className="gap-4">
                            {fields.map((field, index) => (
                                <Controller
                                    key={field.id}
                                    name={`studentList.${index}`}
                                    control={form.control}
                                    render={({
                                        field: controllerField,
                                        fieldState
                                    }) => (
                                        <Field
                                            orientation="horizontal"
                                            data-invalid={fieldState.invalid}
                                        >
                                            <FieldContent>
                                                <InputGroup>
                                                    <InputGroupInput
                                                        {...controllerField}
                                                        id={`student-list-${index}`}
                                                        aria-invalid={
                                                            fieldState.invalid
                                                        }
                                                        placeholder={`Aula ${index + 1}`}
                                                        type="text"
                                                    />
                                                    {fields.length > 1 && (
                                                        <InputGroupAddon align="inline-end">
                                                            <InputGroupButton
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon-xs"
                                                                onClick={() =>
                                                                    remove(
                                                                        index
                                                                    )
                                                                }
                                                                aria-label={`Apagar lista`}
                                                            >
                                                                <XIcon />
                                                            </InputGroupButton>
                                                        </InputGroupAddon>
                                                    )}
                                                </InputGroup>
                                                {fieldState.invalid && (
                                                    <FieldError
                                                        errors={[
                                                            fieldState.error
                                                        ]}
                                                    />
                                                )}
                                            </FieldContent>
                                        </Field>
                                    )}
                                />
                            ))}
                        </FieldGroup>
                        {form.formState.errors.studentList?.root && (
                            <FieldError
                                errors={[
                                    form.formState.errors.studentList.root
                                ]}
                            />
                        )}
                    </FieldSet>
                </form>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    )
}

{
    /* <span className="flex">
            <FormField 
              control={form.control}
              name="initialDate"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Data Inicial</FormLabel>
                    <FormControl>
                      
                    </FormControl>
                </FormItem>
              )}/>
            <FormField
              control={form.control}
              name="imersion"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                      <Checkbox
                        id="toggle-2"
                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                        onChange={field.onChange}
                        checked={field.value}
                      />
                      <p>Imersão</p>
                    </Label>
                  </FormControl>
                </FormItem>
              )}/>
          </span> */
}
