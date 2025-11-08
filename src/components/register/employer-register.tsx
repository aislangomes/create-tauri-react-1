'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { toast } from 'sonner'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '../ui/card'
import { Button } from '../ui/button'

const instructorSchema = z.object({
    id: z.number(),
    fullname: z
        .string()
        .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
    email: z.email({ message: 'Insira um e-mail válido.' }).optional(),
    phone: z
        .string()
        .min(10, { message: 'O telefone deve ter no mínimo 10 caracteres.' }),
    arch: z.string().optional()
})

export function InstructorForm() {
    const form = useForm<z.infer<typeof instructorSchema>>({
        resolver: zodResolver(instructorSchema),
        defaultValues: {
            id: 0,
            fullname: '',
            email: '',
            phone: '',
            arch: ''
        }
    })

    async function onSubmit(data: z.infer<typeof instructorSchema>) {
        data.id = Math.floor(Math.random() * 100000 - 0) + 0

        try {
            console.log('Form Data:', data)
            toast.success('Instrutor cadastrado com sucesso!')
        } catch (error) {
            console.error('Error submitting form:', error)
            toast.error('Erro ao cadastrar instrutor. Tente novamente.')
        }
    }

    return (
        <div className="flex flex-col min-h-[50vh] h-screen w-full items-center justify-center px-4">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Cadastrar Instrutor</CardTitle>
                    <CardDescription>
                        Preencha o formulário abaixo para cadastrar uma novo
                        instrutor.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8 min-w-xl max-w-2xl"
                        >
                            <span className="flex gap-1 flex-row">
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nome"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="E-mail"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <span className="flex gap-1">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Telefone"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <span className="flex gap-1">
                                <FormField
                                    control={form.control}
                                    name="arch"
                                    render={({ field }) => (
                                        <FormItem className="basis-full">
                                            <FormLabel>Arco</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Arco"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </span>
                            <Button type="submit">Cadastrar</Button>
                            <Button
                                variant="outline"
                                onClick={() => form.reset()}
                            >
                                Limpar
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
