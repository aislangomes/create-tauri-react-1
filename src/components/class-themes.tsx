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
import { ScrollArea } from './ui/scroll-area'

const classThemesSchema = z.object({
    imersion: z.boolean(),
    initialDate: z.date(),
    themesList: z.array(z.object({ theme: z.string() }))
})

export function ClassThemes() {
    const form = useForm<z.infer<typeof classThemesSchema>>({
        resolver: zodResolver(classThemesSchema),
        defaultValues: {
            imersion: false,
            initialDate: undefined,
            themesList: [
                { theme: '' },
                { theme: '' },
                { theme: '' },
                { theme: '' }
            ]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'themesList'
    })

    function onSubmit(data: z.infer<typeof classThemesSchema>) {
        return console.log(data)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Temas das aulas</CardTitle>
            </CardHeader>
            <CardContent>
                <form id="class-themes" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldSet>
                        <FieldGroup className="flex-col gap-2.5 mb-3">
                            <div className="flex self-center gap-4">
                                <Field orientation="horizontal">
                                    <Calendar22 />
                                </Field>
                                <Field orientation="horizontal">
                                    <Checkbox id="imersion" name="imersion" />
                                    <FieldLabel htmlFor="imersion">
                                        Imersão
                                    </FieldLabel>
                                </Field>
                            </div>
                            <Button
                                type="button"
                                size="sm"
                                onClick={() => append({ theme: '' })}
                                disabled={fields.length >= 10}
                            >
                                Adcionar uma nova aula
                            </Button>
                        </FieldGroup>
                    </FieldSet>
                    <FieldSet className="gap-4">
                        <FieldGroup className="gap-4">
                            {fields.map((field, index) => (
                                <Controller
                                    key={field.id}
                                    name={`themesList.${index}.theme`}
                                    control={form.control}
                                    render={({
                                        field: controllerField,
                                        fieldState
                                    }) => (
                                        <ScrollArea>
                                            <Field
                                                orientation="horizontal"
                                                data-invalid={
                                                    fieldState.invalid
                                                }
                                            >
                                                <FieldContent>
                                                    <InputGroup>
                                                        <InputGroupInput
                                                            {...controllerField}
                                                            id={`class-themes-theme-${index}`}
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
                                                                    aria-label={`Apagar aula ${index + 1}`}
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
                                        </ScrollArea>
                                    )}
                                />
                            ))}
                        </FieldGroup>
                        {form.formState.errors.themesList?.root && (
                            <FieldError
                                errors={[form.formState.errors.themesList.root]}
                            />
                        )}
                    </FieldSet>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => form.reset()}
                    >
                        Resetar
                    </Button>
                    <Button type="submit" form="class-themes">
                        Salvar
                    </Button>
                </Field>
            </CardFooter>
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
